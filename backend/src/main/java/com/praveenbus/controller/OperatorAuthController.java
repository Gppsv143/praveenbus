package com.praveenbus.controller;

import com.praveenbus.payload.LoginRequest;
import com.praveenbus.payload.JwtResponse;
import com.praveenbus.service.JwtService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.*;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/operator")
@CrossOrigin(origins = "*") // Update with allowed origins in production
@Slf4j
public class OperatorAuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;

    // Login endpoint for operators
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        try {
            log.info("Attempting login for operator: {}", loginRequest.getUsername());

            // Authenticating operator credentials
            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                    loginRequest.getUsername(),
                    loginRequest.getPassword()
                )
            );

            // Generate JWT token using authenticated username
            String token = jwtService.generateToken(authentication.getName());
            log.info("Login successful for operator: {}", loginRequest.getUsername());

            // Returning the token as response
            return ResponseEntity.ok(new JwtResponse(token));

        } catch (BadCredentialsException ex) {
            log.warn("Invalid login attempt for username: {}", loginRequest.getUsername());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new ErrorResponse("Invalid username or password. Please try again."));
        } catch (Exception ex) {
            log.error("Login failed for username: {} due to: {}", loginRequest.getUsername(), ex.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ErrorResponse("Login failed due to a server error. Please contact support."));
        }
    }

    // Inner class to handle custom error responses
    static class ErrorResponse {
        private String message;
        private int statusCode;

        public ErrorResponse(String message) {
            this.message = message;
            this.statusCode = HttpStatus.BAD_REQUEST.value();
        }

        public String getMessage() {
            return message;
        }

        public int getStatusCode() {
            return statusCode;
        }

        public void setStatusCode(int statusCode) {
            this.statusCode = statusCode;
        }
    }
}

