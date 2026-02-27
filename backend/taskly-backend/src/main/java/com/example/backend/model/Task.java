package com.example.backend.model;

import java.util.StringJoiner;

public class Task {
    private Integer taskId;
    private String taskTitle;
    private String taskText;
    private String taskStatus;

    public Task() {
    }

    private Task(Builder builder) {
        taskId = builder.taskId;
        taskTitle = builder.taskTitle;
        taskText = builder.taskText;
        taskStatus = builder.taskStatus;
    }

    public Task(Integer id, String taskTitle, String taskText, String taskStatus) {
    }

    public Integer getTaskId() {
        return taskId;
    }

    public void setTaskId(Integer taskId) {
        this.taskId = taskId;
    }

    public String getTaskTitle() {
        return taskTitle;
    }

    public void setTaskTitle(String taskTitle) {
        this.taskTitle = taskTitle;
    }

    public String getTaskText() {
        return taskText;
    }

    public void setTaskText(String taskText) {
        this.taskText = taskText;
    }

    public String getTaskStatus() {
        return taskStatus;
    }

    public void setTaskStatus(String taskStatus) {
        this.taskStatus = taskStatus;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", Task.class.getSimpleName() + "[", "]")
                .add("taskId=" + taskId)
                .add("taskTitle='" + taskTitle + "'")
                .add("taskText='" + taskText + "'")
                .add("taskStatus='" + taskStatus + "'")
                .toString();
    }

    public static Builder builder() {
        return new Builder();
    }

    public static final class Builder {
        private Integer taskId;
        private String taskTitle;
        private String taskText;
        private String taskStatus;

        public Builder() {
        }

        public Builder withTaskId(Integer val) {
            taskId = val;
            return this;
        }

        public Builder withTaskTitle(String val) {
            taskTitle = val;
            return this;
        }

        public Builder withTaskText(String val) {
            taskText = val;
            return this;
        }

        public Builder withTaskStatus(String val) {
            taskStatus = val;
            return this;
        }

        public Task build() {
            return new Task(this);
        }
    }
}
