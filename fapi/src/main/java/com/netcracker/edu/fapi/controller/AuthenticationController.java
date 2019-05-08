package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.models.User;
import com.netcracker.edu.fapi.service.AuthService;
import com.netcracker.edu.fapi.service.TokenService;
import com.netcracker.edu.fapi.service.impl.TokenServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//AuthenticationController has API exposed to generate JWT token
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

    @Autowired
    private TokenServiceImpl tokenService;
    @Autowired
    private AuthService authService;

    @RequestMapping(value = "/signin", method = RequestMethod.POST)
    public ResponseEntity register(@RequestBody User user) {
        return ResponseEntity.ok(this.tokenService.generateToken(user));
    }
}
