package com.example.backend.service;

import com.example.backend.model.User;

@org.springframework.stereotype.Service
public class Service {

    public User login(String username, String password) {
        return User.build().withUserId(1)
                .withUsername(username)
                .withPassword(password)
                .withFirstname("Test")
                .withLastname("Test")
                .withWorkspaceId(3)
                .build();
    }

}
