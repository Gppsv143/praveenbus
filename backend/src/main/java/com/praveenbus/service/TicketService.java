package com.praveenbus.service;

import com.praveenbus.model.Ticket;
import java.util.List;

public interface TicketService {
    Ticket bookTicket(Ticket ticket);
    Ticket getTicketById(Long ticketId);
    List<Ticket> getTicketsByUserId(Long userId);
}
