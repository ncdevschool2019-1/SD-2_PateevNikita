package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.models.User;
import com.netcracker.edu.fapi.service.UserService;
import com.netcracker.edu.fapi.validation.AuthorizationValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private AuthorizationValidator authorizationValidator;

    @PreAuthorize("hasRole('Admin')")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(this.userService.findAll());
    }

    @PreAuthorize("hasRole('User') or hasRole('Admin')")
    @GetMapping("/username/{userName}")
    public ResponseEntity<User> getUserByUserName(@PathVariable String userName) {
        return ResponseEntity.ok(this.userService.findByUserName(userName));
    }

    @PreAuthorize("hasRole('Admin')")
    @RequestMapping(value = "/id/{id}", method = RequestMethod.GET)
    public ResponseEntity<User> getUserByUserId(@PathVariable String id) {
        return ResponseEntity.ok(this.userService.findUserById(Long.valueOf(id)));
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity saveUser(@RequestBody User user){
        String answer = authorizationValidator.validate(user, this.userService.findAll());
        if (user != null && answer.equals("ok")) {
            return ResponseEntity.ok(this.userService.save(user));
        }
        return ResponseEntity.badRequest().body(answer);
    }

    @PreAuthorize("hasRole('Admin')")
    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<User> changeUserRole(@RequestBody User user) {
        if (user != null) {
            userService.changeUserRole(user);
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.badRequest().build();
    }
}
