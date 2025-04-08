package com.praveenbus.service;

import com.praveenbus.model.Operator;
import com.praveenbus.repository.OperatorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class OperatorService {

    @Autowired
    private OperatorRepository operatorRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Operator registerOperator(Operator operator) {
        operator.setPassword(passwordEncoder.encode(operator.getPassword()));
        return operatorRepository.save(operator);
    }

    public Operator findByEmail(String email) {
        return operatorRepository.findByEmail(email).orElse(null);
    }
}
