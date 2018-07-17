package com.alternet.website.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RequestContactController {
	
	@Autowired
    public JavaMailSender emailSender;
	
	
	@RequestMapping(value="/requestContact",method=RequestMethod.POST)
	public String request(@RequestParam("name") String name, @RequestParam("email") String email) {
		
		SimpleMailMessage message = new SimpleMailMessage();
		
		message.setTo("syzzlehd@gmail.com"); 
        message.setSubject("New Potential Client: "+name); 
    	message.setText("His Email: "+email);

    	
    	emailSender.send(message);
    	
    	return "{\"Message\": \"Success\"}";
	}

}
