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

import com.demo.beans.Comment;
import com.demo.beans.Tweet;
import com.demo.repository.CommentRepository;
import com.demo.services.CommentService;

@RestController
@CrossOrigin
public class CommentController{
	
	@Autowired
	CommentService 	commentService;
	
	
	@Autowired
	CommentRepository commentrepository;

//	@PutMapping("/updatelike/{tid}")
//	@PreAuthorize("hasRole('ROLE_USER')")
//	public int updateLikeCount(@PathVariable("tid") int tid) {
//	}
	
	
	@PostMapping("/AddComment")
	 @PreAuthorize("hasRole('ROLE_USER')")
	public void Add(@RequestBody Comment comment) {
		
		commentService.AddComment(comment);
	//	commentService.updateCommentCount(tweet.getTweet_id());

		
	}
	
	@GetMapping("/GetAllComment")
	 @PreAuthorize("hasRole('ROLE_USER')")
	public List<Comment> GettAll(){
		return commentService.GetAllComment();
			
	}
	
//	Get data by specific id 
	@GetMapping("/GetCBTid/{tweet_id}")
	 @PreAuthorize("hasRole('ROLE_USER')")
	public List<Comment> GetByID(@PathVariable("tweet_id") int tweet_id){
		return commentService.Getbyid(tweet_id);
		
	}
	
	
	@DeleteMapping("/DeleteComment/{id}")  
	 @PreAuthorize("hasRole('ROLE_USER')")
	public void deleteTweet(@PathVariable("id") int id)   
	{  
       commentService.delete(id);  
	}  
	
	@PutMapping("/UpdateComment")
	 @PreAuthorize("hasRole('ROLE_USER')")
	private Comment update(@RequestBody Comment comment)   
	{  
		System.out.println(comment);
		
	commentService.update(comment);
	return comment;  
	}  
	
	
	
	
}