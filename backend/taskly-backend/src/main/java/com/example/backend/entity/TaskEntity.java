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

    @ManyToOne
    @JoinColumn(name = "group_id")
    private GroupEntity group;

    public TaskEntity() {
    }

    private TaskEntity(Builder builder) {
        setId(builder.id);
        setTaskTitle(builder.taskTitle);
        setTaskText(builder.taskText);
        setTaskStatus(builder.taskStatus);
        setGroup(builder.group);
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

    public GroupEntity getGroup() {
        return group;
    }

    public void setGroup(GroupEntity group) {
        this.group = group;
    }

    public static Builder build() {
        return new Builder();
    }

    public static final class Builder {
        private Integer id;
        private String taskTitle;
        private String taskText;
        private String taskStatus;
        private GroupEntity group;

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

        public Builder withGroup(GroupEntity val) {
            group = val;
            return this;
        }

        public TaskEntity build() {
            return new TaskEntity(this);
        }
    }
}