package com.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;

import com.demo.beans.Tweet;
import com.demo.beans.User1;
import com.demo.repository.TweetRepository;
import com.demo.repository.UserRepositoryP;
import com.demo.services.TweetService;
import com.demo.services.UserService;

public class TweetServiceTest {

	

	@Mock
    private TweetRepository tweetrepo;
	
    @Autowired
    @InjectMocks
    private TweetService tweetservice;
    private Tweet tweet1;
    private Tweet tweet2;
    List<Tweet> tweetList;
    
    @BeforeEach
    
    public void setUp() {
    	tweetList = new ArrayList<>();
    	 tweet1 = new Tweet(1,"bad",5,4);
    	 tweet2=new Tweet(2,"good",5,4);
    	 tweetList.add(tweet1);
        tweetList.add(tweet2);
    }
    @AfterEach
    public void tearDown() {
    tweet1 = tweet2 = null;
    tweetList = null;
    }
	
    
    //Test Code for Retrieval of all Users
    @Test
    public void GivenGetAllUsersShouldReturnListOfAllUsers(){
    	tweetrepo.save(tweet1);
        //stubbing mock to return specific data
        when(tweetrepo.findAll()).thenReturn(tweetList);
        List<Tweet> tweetList1 =tweetservice.GetAllTweet();
        assertEquals(tweetList1,tweetList);
        verify(tweetrepo,times(1)).save(tweet1);
        verify(tweetrepo,times(1)).findAll();
}
    

}
