package com.netcracker.edu.fapi.validation.impl;

import com.netcracker.edu.fapi.validation.AuthorizationValidator;
import com.netcracker.edu.fapi.models.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthorizationValidatorImpl implements AuthorizationValidator {

    @Override
    public String validate(User user, List<User> users) {
        for (User value : users) {
            if (value.getUserName().equals(user.getUserName())) {
                return "Such username already exists!";
            }
        }
        return "ok";
    }
}
