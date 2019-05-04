package com.netcracker.edu.fapi.service.impl;

import com.netcracker.edu.fapi.models.User;
import com.netcracker.edu.fapi.service.AuthService;
import com.netcracker.edu.fapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    UserService userService;

    @Override
    public boolean auth(User frontUser) {
        User backUser = userService.findByUserName(frontUser.getUserName());
        return (backUser.getUserName().equals(frontUser.getUserName()) && bCryptPasswordEncoder.matches(frontUser.getUserPassword(), backUser.getUserPassword()));
    }
}
