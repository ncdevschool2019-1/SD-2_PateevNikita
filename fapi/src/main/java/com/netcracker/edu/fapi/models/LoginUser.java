package com.netcracker.edu.fapi.models;

import java.util.Objects;

//Model for user login process
public class LoginUser {

    private String userName;
    private String userPassword;

    public LoginUser() {
    }

    public LoginUser(String userName, String password) {
        this.userName = userName;
        this.userPassword = password;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        LoginUser loginUser = (LoginUser) o;
        return Objects.equals(getUserName(), loginUser.getUserName()) &&
                Objects.equals(getUserPassword(), loginUser.getUserPassword());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getUserName(), getUserPassword());
    }

    @Override
    public String toString() {
        return "LoginUser{" +
                "userName='" + userName + '\'' +
                ", userPassword='" + userPassword + '\'' +
                '}';
    }
}
