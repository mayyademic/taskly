package com.example.backend.model;

import java.util.List;
import java.util.StringJoiner;

public class Workspace {
    private Integer workspaceId;
    private String createdAt;
    private Integer userId;
    private List<Task> taskList;

    public Workspace() {
    }

    private Workspace(Builder builder) {
        setWorkspaceId(builder.workspaceId);
        setCreatedAt(builder.createdAt);
        setUserId(builder.userId);
        setTaskList(builder.taskList);
    }

    public Integer getWorkspaceId() {
        return workspaceId;
    }

    public void setWorkspaceId(Integer workspaceId) {
        this.workspaceId = workspaceId;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public List<Task> getTaskList() {
        return taskList;
    }

    public void setTaskList(List<Task> taskList) {
        this.taskList = taskList;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", Workspace.class.getSimpleName() + "[", "]")
                .add("workspaceId=" + workspaceId)
                .add("createdAt='" + createdAt + "'")
                .add("userId=" + userId)
                .add("taskList=" + taskList)
                .toString();
    }

    public static Builder builder() {
        return new Builder();
    }

    public static final class Builder {
        private Integer workspaceId;
        private String createdAt;
        private Integer userId;
        private List<Task> taskList;

        public Builder() {
        }

        public Builder withWorkspaceId(Integer val) {
            workspaceId = val;
            return this;
        }

        public Builder withCreatedAt(String val) {
            createdAt = val;
            return this;
        }

        public Builder withUserId(Integer val) {
            userId = val;
            return this;
        }

        public Builder withTaskList(List<Task> val) {
            taskList = val;
            return this;
        }

        public Workspace build() {
            return new Workspace(this);
        }
    }
}
