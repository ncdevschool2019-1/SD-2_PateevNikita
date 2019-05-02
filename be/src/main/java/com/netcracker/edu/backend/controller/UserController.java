package com.netcracker.edu.backend.controller;

import com.netcracker.edu.backend.entity.User;
import com.netcracker.edu.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    /*@RequestMapping(value = "/username/{userName}", method = RequestMethod.GET)
    public ResponseEntity<User> getUserByLogin(@PathVariable(name = "userName") String userName) {
        User user = userService.findByUsername(userName);
        return ResponseEntity.ok(user);
    }*/

    @RequestMapping(value = "/admin", method = RequestMethod.GET)
    public List<User> getAllUsers() {
        return userService.findAll();
    }

    @RequestMapping(value = "/auth", method = RequestMethod.POST)
    public User saveUser(@RequestBody User user) {
        return userService.save(user);
    }


}
