package com.praveenbus.controller;

import com.praveenbus.model.Ticket;
import com.praveenbus.repository.TicketRepository;
import com.praveenbus.service.EmailService;
import com.praveenbus.service.SMSService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/ticket")
public class TicketController {

    @Autowired
    private TicketRepository ticketRepo;

    @Autowired
    private EmailService emailService;

    @Autowired
    private SMSService smsService;

    @PostMapping("/book")
    public String bookTicket(@RequestBody Ticket ticket) {
        String ticketId = UUID.randomUUID().toString();
        ticket.setTicketNumber(ticketId);

        ticketRepo.save(ticket);

        String message = "Dear user, your ticket is booked.\n" +
                         "Ticket No: " + ticketId + "\n" +
                         "Bus: " + ticket.getBusName() + "\n" +
                         "Date: " + ticket.getTravelDate() + "\n" +
                         "Seat: " + ticket.getSeatNumber() + "\n" +
                         "Boarding Point: " + ticket.getBoardingPoint();

        // Send email
        emailService.sendTicketEmail(
                ticket.getUserEmail(),
                "PraveenBus Ticket - " + ticketId,
                message
        );

        // Send SMS
        smsService.sendSMS(
                String.valueOf(ticket.getUserMobile()),
                message
        );

        return "Ticket booked successfully with Ticket No: " + ticketId;
    }
}
