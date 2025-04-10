package com.praveenbus.repository;

import com.praveenbus.model.Ticket;
import org.springframework.data.repository.CrudRepository;

public interface TicketRepository extends CrudRepository<Ticket, String> {}
