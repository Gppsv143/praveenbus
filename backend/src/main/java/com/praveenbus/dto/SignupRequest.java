package com.praveenbus.dto;

import lombok.Data;

@Data
public class SignupRequest {
    private String name;
    private String email;
    private String phone;
    private String password;
    private String role; // e.g., USER or OPERATOR
}

