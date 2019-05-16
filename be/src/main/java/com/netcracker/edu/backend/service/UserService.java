package com.netcracker.edu.backend.service;

import com.netcracker.edu.backend.entity.User;

import java.util.List;

public interface UserService {
    List<User> findAll();
    User findByUserName(String userName);
    User getUserById(Long id);
    User save(User user);
    User changeUserRole(User user);
    void delete(long id);
    default void sas() {
        System.out.println("sks");
    }
}
