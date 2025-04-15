package com.busbooking.bus_booking.controller;

import com.busbooking.bus_booking.model.Bus;
import com.busbooking.bus_booking.model.Operator;
import com.busbooking.bus_booking.service.OperatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/operator")
public class OperatorController {

    @Autowired
    private OperatorService operatorService;

    // Operator login endpoint
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Operator operator) {
        // Call login logic from the service
        try {
            String loginResponse = operatorService.login(operator);
            return new ResponseEntity<>(loginResponse, HttpStatus.OK); // Return success with message
        } catch (Exception e) {
            return new ResponseEntity<>("Login failed: " + e.getMessage(), HttpStatus.UNAUTHORIZED); // Return error if login fails
        }
    }

    // Add new bus endpoint
    @PostMapping("/add-bus")
    public ResponseEntity<String> addBus(@RequestBody Bus bus) {
        try {
            // Call service method to add the bus
            operatorService.addBus(bus);
            return new ResponseEntity<>("Bus added successfully", HttpStatus.CREATED); // Return success message with status 201
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to add bus: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR); // Handle errors
        }
    }

    // Fetch all buses managed by the operator
    @GetMapping("/buses")
    public ResponseEntity<Object> getAllBuses() {
        try {
            return new ResponseEntity<>(operatorService.getAllBuses(), HttpStatus.OK); // Fetch all buses
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to fetch buses: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR); // Handle errors
        }
    }
}

