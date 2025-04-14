package com.praveenbus.controller;

import com.praveenbus.model.Ticket;
import com.praveenbus.model.User;
import com.praveenbus.service.EmailService;
import com.praveenbus.service.SMSService;
import com.praveenbus.service.TicketService;
import com.praveenbus.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tickets")
public class TicketController {

    @Autowired
    private TicketService ticketService;

    @Autowired
    private SMSService smsService;

    @Autowired
    private EmailService emailService;

    @Autowired
    private UserService userService;

    // Create ticket
    @PostMapping("/book")
    public Ticket bookTicket(@RequestBody Ticket ticket) {
        Ticket createdTicket = ticketService.bookTicket(ticket);

        // Generate ticket number as a String using ticket ID
        createdTicket.setTicketNumber("TICKET-" + String.valueOf(createdTicket.getTicketId()));

        // Notify user (assuming userId is set in the ticket)
        User user = userService.getUserById(createdTicket.getUserId());

        // Send SMS
        smsService.sendSms(
                user.getMobileNumber(),
                "Thank you for booking with PraveenBus. Your Ticket ID is: " + String.valueOf(createdTicket.getTicketId())
        );

        // Send Email
        emailService.sendEmail(
                user.getEmail(),
                "PraveenBus Ticket Confirmation",
                "Your ticket has been booked successfully. Ticket ID: " + String.valueOf(createdTicket.getTicketId())
        );

        return createdTicket;
    }

    // Get ticket by ID
    @GetMapping("/{ticketId}")
    public Ticket getTicketById(@PathVariable Long ticketId) {
        return ticketService.getTicketById(ticketId);
    }

    // Get all tickets by user
    @GetMapping("/user/{userId}")
    public List<Ticket> getTicketsByUserId(@PathVariable Long userId) {
        return ticketService.getTicketsByUserId(userId);
    }
}

