package com.praveenbus.service;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import org.springframework.stereotype.Service;

@Service
public class SMSService {

    private final String ACCOUNT_SID = "YOUR_TWILIO_SID";
    private final String AUTH_TOKEN = "YOUR_TWILIO_AUTH_TOKEN";
    private final String FROM_PHONE = "YOUR_TWILIO_PHONE";

    public SMSService() {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
    }

    public void sendSMS(String toPhone, String body) {
        Message.creator(new com.twilio.type.PhoneNumber(toPhone),
                        new com.twilio.type.PhoneNumber(FROM_PHONE),
                        body).create();
    }
}
