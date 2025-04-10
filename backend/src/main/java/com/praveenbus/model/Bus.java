package com.praveenbus.model;

import jakarta.persistence.*;

@Entity
public class Bus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String busName;
    private String busType;
    private int totalSeats;
    private double price;

    // Getters and setters or use Lombok annotations if configured
}

