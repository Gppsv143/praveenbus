package com.praveenbus.model;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Entity
public class Ticket {

    @Id
    private String ticketNumber;

    @Column(nullable = false)
    private String busName;

    @Column(nullable = false)
    private String seatNumber;

    @Temporal(TemporalType.DATE)
    private Date travelDate;

    @Column(nullable = false)
    private String boardingPoint;

    @Column(nullable = false)
    private String userMobile;

    @Column(nullable = false)
    private String userEmail;

    // Default constructor
    public Ticket() {
        this.ticketNumber = UUID.randomUUID().toString(); // Auto-generate ticket number
    }

    // Parameterized constructor
    public Ticket(String busName, String seatNumber, Date travelDate, String boardingPoint, String userMobile, String userEmail) {
        this.ticketNumber = UUID.randomUUID().toString();
        this.busName = busName;
        this.seatNumber = seatNumber;
        this.travelDate = travelDate;
        this.boardingPoint = boardingPoint;
        this.userMobile = userMobile;
        this.userEmail = userEmail;
    }

    // Getters and Setters
    public String getTicketNumber() {
        return ticketNumber;
    }

    public void setTicketNumber(String ticketNumber) {
        this.ticketNumber = ticketNumber;
    }

    public String getBusName() {
        return busName;
    }

    public void setBusName(String busName) {
        this.busName = busName;
    }

    public String getSeatNumber() {
        return seatNumber;
    }

    public void setSeatNumber(String seatNumber) {
        this.seatNumber = seatNumber;
    }

    public Date getTravelDate() {
        return travelDate;
    }

    public void setTravelDate(Date travelDate) {
        this.travelDate = travelDate;
    }

    public String getBoardingPoint() {
        return boardingPoint;
    }

    public void setBoardingPoint(String boardingPoint) {
        this.boardingPoint = boardingPoint;
    }

    public String getUserMobile() {
        return userMobile;
    }

    public void setUserMobile(String userMobile) {
        this.userMobile = userMobile;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    @Override
    public String toString() {
        return "Ticket{" +
                "ticketNumber='" + ticketNumber + '\'' +
                ", busName='" + busName + '\'' +
                ", seatNumber='" + seatNumber + '\'' +
                ", travelDate=" + travelDate +
                ", boardingPoint='" + boardingPoint + '\'' +
                ", userMobile='" + userMobile + '\'' +
                ", userEmail='" + userEmail + '\'' +
                '}';
    }
}

