package com.praveenbus.service;

import com.praveenbus.model.LoginRequest;
import com.praveenbus.model.JwtResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private JwtService jwtService;

    public JwtResponse authenticateUser(LoginRequest loginRequest) {
        // Replace with actual DB validation
        if ("admin".equals(loginRequest.getUsername()) &&
            "admin123".equals(loginRequest.getPassword())) {
            String token = jwtService.generateToken(loginRequest.getUsername());
            return new JwtResponse(token);
        }
        throw new RuntimeException("Invalid Credentials");
    }
}
