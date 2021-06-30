package com.demo.controller;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class LoginController {

    @GetMapping("/")
    public String mainPage() {
    	return "Main Page";
    }
    
    @GetMapping("/user")
    @PreAuthorize("hasRole('ROLE_USER')")
    public String userPage() {
    	return "User Page";
    }
    
    @GetMapping("/admin")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public String adminPage() {
    	return "Admin Page";
    }
    
}

