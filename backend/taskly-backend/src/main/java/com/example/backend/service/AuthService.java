package com.example.backend.service;

import com.example.backend.entity.UserEntity;
import com.example.backend.entity.WorkspaceEntity;
import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import com.example.backend.repository.WorkspaceRepository;

@org.springframework.stereotype.Service
public class AuthService {

    private final UserRepository userRepository;
    private final WorkspaceRepository workspaceRepository;

    public AuthService(UserRepository repository, WorkspaceRepository workspaceRepository) {
        this.userRepository = repository;
        this.workspaceRepository = workspaceRepository;
    }

    public User login(String username, String password) {
        UserEntity userResponse = userRepository.findByUsername(username)
                .filter(user -> user.getPassword().equals(password))
                .orElse(null);

        return User.build()
                .withUserId(userResponse.getId())
                .withUsername(userResponse.getUsername())
                .withFirstname(userResponse.getFirstname())
                .withLastname(userResponse.getLastname())
                .withWorkspaceId(userResponse.getWorkspaceEntity().getId())
                .build();
    }

    public User signup(User user) {
        System.out.println("User" + user);
        WorkspaceEntity workspace = workspaceRepository.save(new WorkspaceEntity());

        System.out.println("Workspace" + workspace.getId());
        UserEntity userEntity = UserEntity.build()
                .withFirstname(user.getFirstname())
                .withLastname(user.getLastname())
                .withUsername(user.getUsername())
                .withPassword(user.getPassword())
                .withWorkspaceEntity(workspace)
                .build();

        UserEntity insertedUser = userRepository.save(userEntity);

        System.out.println("InsertedUser" + insertedUser);

        return User.build()
                .withUserId(insertedUser.getId())
                .withUsername(insertedUser.getUsername())
                .withFirstname(insertedUser.getFirstname())
                .withLastname(insertedUser.getLastname())
                .withWorkspaceId(insertedUser.getWorkspaceEntity().getId())
                .build();
    }
}
