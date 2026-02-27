package com.example.backend.model;

import java.util.List;
import java.util.StringJoiner;

public class Group {
    private Integer groupId;
    private String groupName;
    private List<Task> tasks;

    public Group() {
    }

    private Group(Builder builder) {
        groupId = builder.groupId;
        groupName = builder.groupName;
        tasks = builder.tasks;
    }

    public Group(Integer id, String groupName, List<Task> list) {
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

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", Group.class.getSimpleName() + "[", "]")
                .add("groupId=" + groupId)
                .add("groupName='" + groupName + "'")
                .add("tasks=" + tasks)
                .toString();
    }

    public static Builder build() {
        return new Builder();
    }

    public static final class Builder {
        private Integer groupId;
        private String groupName;
        private List<Task> tasks;

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

        public Builder withTasks(List<Task> val) {
            tasks = val;
            return this;
        }

        public Group build() {
            return new Group(this);
        }
    }
}
