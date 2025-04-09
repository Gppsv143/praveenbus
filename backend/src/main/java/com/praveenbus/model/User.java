package com.praveenbus.model;

import lombok.Data;
import javax.persistence.*;

@Data  // This adds getters/setters automatically
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String mobileNumber;
    private String password;
}

