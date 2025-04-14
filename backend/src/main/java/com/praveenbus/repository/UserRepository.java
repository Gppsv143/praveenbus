package com.praveenbus.repository;

import com.praveenbus.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByMobileNumber(String mobileNumber);
    boolean existsByEmail(String email);
    Optional<User> findByMobileNumber(String mobileNumber);
    // Other repository methods
}
