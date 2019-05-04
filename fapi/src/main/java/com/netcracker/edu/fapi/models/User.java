package com.netcracker.edu.fapi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Objects;

@JsonIgnoreProperties(ignoreUnknown = true)
public class User {

    private long id;
    private String firstName;
    private String lastName;
    private String userName;
    private String email;
    private String userPassword;
    private Role role;

    public User() {
    }

    public User(long id, String firstName, String lastName, String userName, String email, String userPassword, Role role) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.email = email;
        this.userPassword = userPassword;
        this.role = role;
    }

    public long getId() { return id;
    }

    public void setId(long id) { this.id = id;
    }

    public String getFirstName() { return firstName;
    }

    public void setFirstName(String firstName) { this.firstName = firstName;
    }

    public String getLastName() { return lastName;
    }

    public void setLastName(String lastName) { this.lastName = lastName;
    }

    public String getUserName() { return userName;
    }

    public void setUserName(String userName) { this.userName = userName;
    }

    public String getEmail() { return email;
    }

    public void setEmail(String email) { this.email = email; }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return getId() == user.getId() &&
                Objects.equals(getFirstName(), user.getFirstName()) &&
                Objects.equals(getLastName(), user.getLastName()) &&
                Objects.equals(getUserName(), user.getUserName()) &&
                Objects.equals(getEmail(), user.getEmail()) &&
                Objects.equals(getUserPassword(), user.getUserPassword()) &&
                Objects.equals(getRole(), user.getRole());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getFirstName(), getLastName(), getUserName(), getEmail(), getUserPassword(), getRole());
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", userName='" + userName + '\'' +
                ", email='" + email + '\'' +
                ", userPassword='" + userPassword + '\'' +
                ", role=" + role +
                '}';
    }
}
