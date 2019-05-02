package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.models.User;
import com.netcracker.edu.fapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/admin", method = RequestMethod.GET)
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.findAll());
    }

    /*@PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    public List<User> getAllUsers(){
        return userService.findAll();
    }*/

    @GetMapping("/login/{login}")
    public User getUserByLogin(@PathVariable String login) {
        return userService.findByLogin(login);
    }

    @RequestMapping(value="/auth", method = RequestMethod.POST, produces = "application/json")
    public User saveUser(@RequestBody User user){
        return userService.save(user);
    }
}
