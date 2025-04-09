package com.praveenbus.payload;

import lombok.Data;

@Data
public class RegisterRequest {
    private String name;
    private String email;
    private String mobileNumber;
    private String password;
    private String gender;
    private String dateOfBirth; // format: yyyy-MM-dd
}
