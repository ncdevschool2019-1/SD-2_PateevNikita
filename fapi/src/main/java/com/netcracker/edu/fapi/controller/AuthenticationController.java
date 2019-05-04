package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.models.User;
import com.netcracker.edu.fapi.security.TokenProvider;
import com.netcracker.edu.fapi.service.AuthService;
import com.netcracker.edu.fapi.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

//AuthenticationController has API exposed to generate JWT token
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {


    @Autowired
    private TokenService tokenService;
    @Autowired
    private AuthService authService;

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity register(@RequestBody User user) {
        return ResponseEntity.ok(this.tokenService.generateToken(user));
    }
}
