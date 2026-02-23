package com.example.backend.model;

import java.util.StringJoiner;

public class User {
    private Integer userId;
    private String firstname;
    private String lastname;
    private String username;
    private String password;
    private Integer workspaceId;

    public User() {
    }

    private User(Builder builder) {
        setUserId(builder.userId);
        setFirstname(builder.firstname);
        setLastname(builder.lastname);
        setUsername(builder.username);
        setPassword(builder.password);
        setWorkspaceId(builder.workspaceId);
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
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

    public Integer getWorkspaceId() {
        return workspaceId;
    }

    public void setWorkspaceId(Integer workspaceId) {
        this.workspaceId = workspaceId;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", User.class.getSimpleName() + "[", "]")
                .add("userId=" + userId)
                .add("firstname='" + firstname + "'")
                .add("lastname='" + lastname + "'")
                .add("username='" + username + "'")
                .add("password='" + password + "'")
                .add("workspaceId=" + workspaceId)
                .toString();
    }

    public static Builder build() {
        return new Builder();
    }

    public static final class Builder {
        private Integer userId;
        private String firstname;
        private String lastname;
        private String username;
        private String password;
        private Integer workspaceId;

        public Builder() {
        }

        public Builder withUserId(Integer val) {
            userId = val;
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

        public Builder withUsername(String val) {
            username = val;
            return this;
        }

        public Builder withPassword(String val) {
            password = val;
            return this;
        }

        public Builder withWorkspaceId(Integer val) {
            workspaceId = val;
            return this;
        }

        public User build() {
            return new User(this);
        }
    }
}
