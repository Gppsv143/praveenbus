package com.praveenbus.controller;

import com.praveenbus.model.User;
import com.praveenbus.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // User Registration
    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        // Check if user already exists by email
        Optional<User> existingUserByEmail = userRepository.findByEmail(user.getEmail());
        if (existingUserByEmail.isPresent()) {
            return ResponseEntity.badRequest().body("User with this email already exists.");
        }

        // Check if user already exists by mobile number
        Optional<User> existingUserByMobile = userRepository.findByMobileNumber(user.getMobileNumber());
        if (existingUserByMobile.isPresent()) {
            return ResponseEntity.badRequest().body("User with this mobile number already exists.");
        }

        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully!");
    }

    // User Login
    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user) {
        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());

        if (existingUser.isPresent()) {
            User dbUser = existingUser.get();
            if (dbUser.getPassword().equals(user.getPassword())) {
                return ResponseEntity.ok("Login successful!");
            } else {
                return ResponseEntity.badRequest().body("Invalid password.");
            }
        } else {
            return ResponseEntity.badRequest().body("User not found with this email.");
        }
    }

    // Get user by ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        Optional<User> user = userRepository.findById(id);
        return user.<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.badRequest().body("User not found."));
    }
}

