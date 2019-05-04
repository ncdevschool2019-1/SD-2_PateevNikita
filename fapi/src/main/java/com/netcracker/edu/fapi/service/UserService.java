package com.netcracker.edu.fapi.service;

import com.netcracker.edu.fapi.models.User;
import java.util.List;

public interface UserService {
    User findByUserName(String userName);
    User findUserById(Long id);
    List<User> findAll();
    User save(User user);
}
