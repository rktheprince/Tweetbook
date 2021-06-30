package com.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.demo.beans.User1;
import com.demo.repository.UserRepositoryP;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
public class RepositoryUserTest {	
	
	 @Autowired
	    private UserRepositoryP userRepository;
	    private User1 user1;
	    @BeforeEach
	    public void setUp() {
	    	user1 = new User1(3,"arti","saroj","arti98","user","arti@gmail.com","arti",2111223435,null);
	    }
	    @AfterEach
	    public void tearDown() {
	    	userRepository.deleteAll();
	        user1 = null;
	    }
	    
//	    @Test
//	    public void givenProductToAddShouldReturnAddedProduct(){
//	    	userRepository.save(user1);
//	         User1 fetcheduser = userRepository.findById(user1.getUser_id()).get();
//	         assertEquals(1, fetcheduser.getUser_id());
//	    }
//	    
	    @Test
	    public void GivenGetAllUserShouldReturnListOfAllUsers(){
	    	User1 user1 = new User1(1,"arti","saroj","arti20","user","arti@gmail.com","arti",2111223435,null);
	         User1 user2 = new User1(2,"ashi","jaiswal","ashi123","user","ashi@gmail.com","ashi123",2111223435,null);
	         userRepository.save(user1);
	         userRepository.save(user2);
	         List<User1> userList = (List<User1>) userRepository.findAll();
	         assertEquals("ashi", userList.get(1).getFirst_name());
	    }
	
	
	
}
