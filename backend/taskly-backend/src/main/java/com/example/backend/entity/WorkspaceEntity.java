package com.example.backend.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "workspaces")
public class WorkspaceEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "workspace_id", referencedColumnName = "id")
    private Set<GroupEntity> groups = new HashSet<>();

    @PrePersist
    public void prePersist() {
        if (createdAt == null) {
            createdAt = LocalDateTime.now();
        }
    }

    public WorkspaceEntity() {
    }

    private WorkspaceEntity(Builder builder) {
        setId(builder.id);
        setCreatedAt(builder.createdAt);
        setGroups(builder.groups);
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public Set<GroupEntity> getGroups() {
        return groups;
    }

    public void setGroups(Set<GroupEntity> groups) {
        this.groups = groups;
    }

    public static Builder build() {
        return new Builder();
    }


    public static final class Builder {
        private Integer id;
        private LocalDateTime createdAt;
        private Set<GroupEntity> groups;

        public Builder() {
        }

        public Builder withId(Integer val) {
            id = val;
            return this;
        }

        public Builder withCreatedAt(LocalDateTime val) {
            createdAt = val;
            return this;
        }

        public Builder withGroups(Set<GroupEntity> val) {
            groups = val;
            return this;
        }

        public WorkspaceEntity build() {
            return new WorkspaceEntity(this);
        }
    }
}