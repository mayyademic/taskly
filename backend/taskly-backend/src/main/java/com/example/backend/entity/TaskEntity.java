package com.example.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "tasks")
public class TaskEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String taskTitle;
    private String taskText;
    private String taskStatus;

    @Column(name = "group_id")
    private Integer groupId;

    public TaskEntity() {
    }

    private TaskEntity(Builder builder) {
        setId(builder.id);
        setTaskTitle(builder.taskTitle);
        setTaskText(builder.taskText);
        setTaskStatus(builder.taskStatus);
        setGroupId(builder.groupId);
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public Integer getGroupId() {
        return groupId;
    }

    public void setGroupId(Integer groupId) {
        this.groupId = groupId;
    }

    public static Builder build() {
        return new Builder();
    }

    public static final class Builder {
        private Integer id;
        private String taskTitle;
        private String taskText;
        private String taskStatus;
        private Integer groupId;

        public Builder() {
        }

        public Builder withId(Integer val) {
            id = val;
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

        public Builder withGroupId(Integer val) {
            groupId = val;
            return this;
        }

        public TaskEntity build() {
            return new TaskEntity(this);
        }
    }
}