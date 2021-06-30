package com.demo;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import com.demo.beans.User1;
import com.demo.repository.UserRepositoryP;
import com.demo.services.UserService;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

	@Mock
    private UserRepositoryP userRepo;
	
    @Autowired
    @InjectMocks
    private UserService userservice;
    private User1 user1;
    private User1 user2;
    List<User1> userList;
    
    @BeforeEach
    
    public void setUp() {
    	userList = new ArrayList<>();
    	 user1 = new User1(1,"arti","saroj","arti20","user","arti@gmail.com","arti",2111223435,null);
        user2 = new User1(2,"ashi","jaiswal","ashi123","user","ashi@gmail.com","ashi123",2111223435,null);  
    userList.add(user1);
    userList.add(user2);
    }
    @AfterEach
    public void tearDown() {
    user1 = user2 = null;
    userList = null;
    }
	
    
    //Test Code for Retrieval of all Users
    @Test
    public void GivenGetAllUsersShouldReturnListOfAllUsers(){
    	userRepo.save(user1);
        //stubbing mock to return specific data
        when(userRepo.findAll()).thenReturn(userList);
        List<User1> userList1 =userservice.getAllUsers();
        assertEquals(userList1,userList);
        verify(userRepo,times(1)).save(user1);
        verify(userRepo,times(1)).findAll();
}
    
    @Test
    public void givenIdTODeleteThenShouldDeleteTheProduct(){
  //      when(userservice.deleteUserById(user1.getUser_id())).thenReturn(user1);
    //assertThat(productService.);
        verify(userRepo,times(1)).findAll();
    }
    
}
