package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.Tweet;
import com.demo.beans.User1;
import com.demo.services.TweetService;

@RestController
@CrossOrigin
public class TweetController{
	
	@Autowired
	TweetService tweetService;
	
	@PostMapping("/AddTweet")
	@PreAuthorize("hasRole('ROLE_USER')")
	public void Add(@RequestBody Tweet tweet) {
		
		tweetService.AddTweet(tweet);
	}
	
	@GetMapping("/GetAllTweet")
  @PreAuthorize("hasRole('ROLE_USER')or hasRole('ROLE_ADMIN')")	 
	public List<Tweet> GettAll(){
		return tweetService.GetAllTweet();
			
	}
//	Get data by specific id 
	@GetMapping("/GetById/{user_id}")
	 @PreAuthorize("hasRole('ROLE_USER')")
	public List<Tweet> GetByID(@PathVariable("user_id") int user_id){
		return tweetService.Getbyid(user_id);
		
	}
	
	@DeleteMapping("/Delete/{id}")  
    @PreAuthorize("hasRole('ROLE_USER')or hasRole('ROLE_ADMIN')")
	public void deleteTweet(@PathVariable("id") int id)   
	{  
       tweetService.delete(id);  
	}  
	
	@PutMapping("/Update")  
	 @PreAuthorize("hasRole('ROLE_USER')")
	private Tweet update(@RequestBody Tweet tweet)   
	{  
	tweetService.saveOrUpdate(tweet);  
	return tweet;  
	}  
	
	
	@PutMapping("/updatelike/{tid}")
	@PreAuthorize("hasRole('ROLE_USER')")
	public int updateLikeCount(@PathVariable("tid") int tid) {
	return tweetService.updateLikeCount(tid);
	}
	
//	@PutMapping("/Update")  
//	public Tweet update(@RequestBody Tweet tweet)   
//	{  
//	tweetService.UpdateTweet(tweet);  
//	return tweet;  
//	}  
	
}