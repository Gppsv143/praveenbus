package com.busbooking.bus_booking_app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.busbooking.bus_booking_app.models.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
