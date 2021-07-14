package com.demo;

 

import static org.junit.jupiter.api.Assertions.assertEquals;

 

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

 

import com.demo.beans.User1;
import com.demo.services.UserService;

 

@SpringBootTest
public class UserServiceTest {
    @Autowired
    UserService service;
    
    @Test
    public void addUser() {
        User1 user1= new User1(111,"natasha","romanoff","natasha","user","anu2gmail.com","1abc",2111223435,null);

 

        System.out.println(service.createUser(user1));
    }
    
    @Test
    public void findUserName() {
        User1 user1= service.getUserByUsername("natasha");

 

        
        System.out.println(user1.getUser_id());
        assertEquals("natasha", service.getUserByUsername("natasha").getUsername());
//        service.deleteUserById(user1.getUser_id())
    }
    
    @Test
    public void deleteUser() {
        
        service.deleteUserById(service.getUserByUsername("natasha").getUser_id());
    }
}