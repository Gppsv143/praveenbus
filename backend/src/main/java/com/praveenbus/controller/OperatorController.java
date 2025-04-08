package com.praveenbus.controller;

import com.praveenbus.model.Operator;
import com.praveenbus.service.OperatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/operator")
@CrossOrigin
public class OperatorController {

    @Autowired
    private OperatorService operatorService;

    @PostMapping("/signup")
    public ResponseEntity<?> registerOperator(@RequestBody Operator operator) {
        Operator created = operatorService.registerOperator(operator);
        return ResponseEntity.ok(created);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Operator operator) {
        Operator existing = operatorService.findByEmail(operator.getEmail());
        if (existing != null && existing.getPassword().equals(operator.getPassword())) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }
}
