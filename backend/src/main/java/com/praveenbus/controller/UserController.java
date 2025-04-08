package com.praveenbus.controller;

import com.praveenbus.model.Bus;
import com.praveenbus.repository.BusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private BusRepository busRepository;

    @GetMapping("/buses")
    public List<Bus> getAllBuses() {
        return busRepository.findAll();
    }

    @GetMapping("/buses/{id}")
    public Optional<Bus> getBusById(@PathVariable Long id) {
        return busRepository.findById(id);
    }
}

