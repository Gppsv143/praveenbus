package com.busbooking.bus_booking.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Operator {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String operatorName;
    private String email;
    private String phoneNumber;
    private String password;
}

