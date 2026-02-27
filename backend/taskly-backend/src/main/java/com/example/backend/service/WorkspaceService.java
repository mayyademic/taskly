package com.example.backend.service;

import com.example.backend.entity.WorkspaceEntity;
import com.example.backend.model.Group;
import com.example.backend.model.Task;
import com.example.backend.model.Workspace;
import com.example.backend.repository.GroupRepository;
import com.example.backend.repository.TaskRepository;
import com.example.backend.repository.WorkspaceRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkspaceService {

    private final WorkspaceRepository workspaceRepository;
    private final GroupRepository groupRepository;
    private final TaskRepository taskRepository;

    public WorkspaceService(WorkspaceRepository workspaceRepository, GroupRepository groupRepository, TaskRepository taskRepository) {
        this.workspaceRepository = workspaceRepository;
        this.groupRepository = groupRepository;
        this.taskRepository = taskRepository;
    }

    public Workspace getWorkspaceById(Integer id) {

        WorkspaceEntity workspace = workspaceRepository
                .findWorkspaceWithGroupsAndTasks(id)
                .orElseThrow();

        return mapToModel(workspace);
    }

    private Workspace mapToModel(WorkspaceEntity workspace) {

        List<Group> groups = workspace.getGroups().stream()
                .map(group -> Group.build()
                        .withGroupId(group.getId())
                        .withGroupName(group.getGroupName())
                        .withTasks(
                                group.getTasks().stream()
                                        .map(task -> Task.builder()
                                                .withTaskId(task.getId())
                                                .withTaskTitle(task.getTaskTitle())
                                                .withTaskText(task.getTaskText())
                                                .withTaskStatus(task.getTaskStatus())
                                                .build()
                                        ).toList()
                        ).build()
                ).toList();

        return Workspace.builder()
                .withWorkspaceId(workspace.getId())
                .withCreatedAt(workspace.getCreatedAt().toString())
                .withGroups(groups)
                .build();
    }
}
