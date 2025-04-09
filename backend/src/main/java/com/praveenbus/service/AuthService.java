package com.praveenbus.controller;

import com.praveenbus.payload.RegisterRequest;
import com.praveenbus.service.AuthService;
import com.praveenbus.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody RegisterRequest request) {
        User user = authService.register(request);
        return ResponseEntity.ok("User registered successfully!");
    }
}

