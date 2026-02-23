package com.example.backend.model;

import java.util.StringJoiner;

public class Group {
    private Integer groupId;
    private String groupName;
    private Integer workspaceId;
    private Integer taskId;

    public Group() {
    }

    private Group(Builder builder) {
        setGroupId(builder.groupId);
        setGroupName(builder.groupName);
        setWorkspaceId(builder.workspaceId);
        setTaskId(builder.taskId);
    }

    public Integer getGroupId() {
        return groupId;
    }

    public void setGroupId(Integer groupId) {
        this.groupId = groupId;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public Integer getWorkspaceId() {
        return workspaceId;
    }

    public void setWorkspaceId(Integer workspaceId) {
        this.workspaceId = workspaceId;
    }

    public Integer getTaskId() {
        return taskId;
    }

    public void setTaskId(Integer taskId) {
        this.taskId = taskId;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", Group.class.getSimpleName() + "[", "]")
                .add("groupId=" + groupId)
                .add("groupName='" + groupName + "'")
                .add("workspaceId=" + workspaceId)
                .add("taskId=" + taskId)
                .toString();
    }

    public static Builder build() {
        return new Builder();
    }

    public static final class Builder {
        private Integer groupId;
        private String groupName;
        private Integer workspaceId;
        private Integer taskId;

        public Builder() {
        }

        public Builder withGroupId(Integer val) {
            groupId = val;
            return this;
        }

        public Builder withGroupName(String val) {
            groupName = val;
            return this;
        }

        public Builder withWorkspaceId(Integer val) {
            workspaceId = val;
            return this;
        }

        public Builder withTaskId(Integer val) {
            taskId = val;
            return this;
        }

        public Group build() {
            return new Group(this);
        }
    }
}
