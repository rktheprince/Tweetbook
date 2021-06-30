package com.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.Tweet;
import com.demo.beans.User1;
import com.demo.repository.TweetRepository;


@Service
public class TweetService {
	
	@Autowired
	TweetRepository tweetRepository;
	
	public void AddTweet(Tweet tweet) {
		tweetRepository.save(tweet);
	}
	
	public List<Tweet> GetAllTweet(){
		return tweetRepository.findAll();
		
	}
//	  find specific data
	public List<Tweet> Getbyid(int user_id){
		return tweetRepository.findByTweetUserId(user_id);
	}
	
//	 public List<Review> getReviewByProductId(int productId)             
//	  { 
//		return reviewRepository.findByReviewProductId(productId);
//	  }
	
	public void delete(int id)   
	{  
	tweetRepository.deleteById(id);  
	}  
	
//	public void UpdateTweet(Tweet tweet)   
//	{  
//	tweetRepository.save(tweet);  
//	}  
	
	public void saveOrUpdate(Tweet tweet)   
	{  
		tweetRepository.save(tweet);  
	}  
	
	
	//updating like
	public int updateLikeCount(int tid) {
	// TODO Auto-generated method stub
	int i= tweetRepository.findByTweetId(tid)+1;
	System.out.println("id"+tweetRepository.findByTweetId(tid));
	return tweetRepository.setUpdateLike(i,tid);
	}
	
}