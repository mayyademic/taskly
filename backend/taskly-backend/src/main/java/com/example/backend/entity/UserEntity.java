package com.example.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    private String firstname;
    private String lastname;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "workspace_id")
    private WorkspaceEntity workspaceEntity;

    public UserEntity() {
    }

    private UserEntity(Builder builder) {
        setId(builder.id);
        setUsername(builder.username);
        setPassword(builder.password);
        setFirstname(builder.firstname);
        setLastname(builder.lastname);
        setWorkspaceEntity(builder.workspaceEntity);
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public WorkspaceEntity getWorkspaceEntity() {
        return workspaceEntity;
    }

    public void setWorkspaceEntity(WorkspaceEntity workspaceEntity) {
        this.workspaceEntity = workspaceEntity;
    }

    public static Builder build() {
        return new Builder();
    }

    public static final class Builder {
        private Integer id;
        private String username;
        private String password;
        private String firstname;
        private String lastname;
        private WorkspaceEntity workspaceEntity;

        public Builder() {
        }

        public Builder withId(Integer val) {
            id = val;
            return this;
        }

        public Builder withUsername(String val) {
            username = val;
            return this;
        }

        public Builder withPassword(String val) {
            password = val;
            return this;
        }

        public Builder withFirstname(String val) {
            firstname = val;
            return this;
        }

        public Builder withLastname(String val) {
            lastname = val;
            return this;
        }

        public Builder withWorkspaceEntity(WorkspaceEntity val) {
            workspaceEntity = val;
            return this;
        }

        public UserEntity build() {
            return new UserEntity(this);
        }
    }
}