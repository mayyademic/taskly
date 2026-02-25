package com.example.backend.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "groups")
public class GroupEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String groupName;

    @ManyToOne
    @JoinColumn(name = "workspace_id")
    private WorkspaceEntity workspace;

    @OneToMany(mappedBy = "group", cascade = CascadeType.ALL)
    private List<TaskEntity> tasks;

    public GroupEntity() {
    }

    private GroupEntity(Builder builder) {
        setId(builder.id);
        setGroupName(builder.groupName);
        setWorkspace(builder.workspace);
        setTasks(builder.tasks);
    }

    public List<TaskEntity> getTasks() {
        return tasks;
    }

    public void setTasks(List<TaskEntity> tasks) {
        this.tasks = tasks;
    }

    public WorkspaceEntity getWorkspace() {
        return workspace;
    }

    public void setWorkspace(WorkspaceEntity workspace) {
        this.workspace = workspace;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public static Builder build() {
        return new Builder();
    }

    public static final class Builder {
        private Integer id;
        private String groupName;
        private WorkspaceEntity workspace;
        private List<TaskEntity> tasks;

        public Builder() {
        }

        public Builder withId(Integer val) {
            id = val;
            return this;
        }

        public Builder withGroupName(String val) {
            groupName = val;
            return this;
        }

        public Builder withWorkspace(WorkspaceEntity val) {
            workspace = val;
            return this;
        }

        public Builder withTasks(List<TaskEntity> val) {
            tasks = val;
            return this;
        }

        public GroupEntity build() {
            return new GroupEntity(this);
        }
    }
}