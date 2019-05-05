package com.netcracker.edu.fapi.validation;

import com.netcracker.edu.fapi.models.User;

import java.util.List;

public interface AuthorizationValidator {
    String validate(User user, List<User> users);
}
