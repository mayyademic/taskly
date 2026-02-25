package com.example.backend.model;

import java.util.List;
import java.util.StringJoiner;

public class Workspace {
    private Integer workspaceId;
    private String createdAt;
    private List<Group> groups;

    public Workspace() {
    }

    private Workspace(Builder builder) {
        workspaceId = builder.workspaceId;
        createdAt = builder.createdAt;
        groups = builder.groups;
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

    public List<Group> getGroups() {
        return groups;
    }

    public void setGroups(List<Group> groups) {
        this.groups = groups;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", Workspace.class.getSimpleName() + "[", "]")
                .add("workspaceId=" + workspaceId)
                .add("createdAt='" + createdAt + "'")
                .add("groups=" + groups)
                .toString();
    }

    public static Builder builder() {
        return new Builder();
    }


    public static final class Builder {
        private Integer workspaceId;
        private String createdAt;
        private List<Group> groups;

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

        public Builder withGroups(List<Group> val) {
            groups = val;
            return this;
        }

        public Workspace build() {
            return new Workspace(this);
        }
    }
}
