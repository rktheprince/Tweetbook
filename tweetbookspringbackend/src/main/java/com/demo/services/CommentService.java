package com.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.Comment;
import com.demo.beans.Tweet;
import com.demo.repository.CommentRepository;
import com.demo.repository.TweetRepository;

@Service
public class CommentService {
	
	@Autowired
	CommentRepository commentRepository;
	
	@Autowired
	TweetRepository tweetrepository;
	
	public void AddComment(Comment comment) {
		System.out.println(comment);
		System.out.println(tweetrepository.findByTweetId1(comment.getTweet().getTweet_id()));
		
		int i=tweetrepository.findByTweetId1(comment.getTweet().getTweet_id())+1;
		
		tweetrepository.setUpdateComment(i, comment.getTweet().getTweet_id());
		commentRepository.save(comment);
		
	}
	
	public List<Comment> GetAllComment(){
		return commentRepository.findAll();
		
	}
//	  find specific data
	public List<Comment> Getbyid(int tweet_id){
		return commentRepository.findByTweetUserId(tweet_id);
	}

	public void delete(int id)   
	{  
	Optional<Comment> c=commentRepository.findById(id);
	int i=c.get().getTweet().getTweet_id();
	commentRepository.deleteById(id);  
	int k=tweetrepository.findByTweetId1(i)-1;
	System.out.println(k);
	System.out.println(i);
	tweetrepository.setUpdateComment(k,i);
	//commentRepository.save(comment);
	}  

	public void update(Comment comment)   
	{  
		System.out.println(comment);
		commentRepository.setByCommentId(comment.getComment_content(), comment.getComment_id(), comment.getTweet().getTweet_id());  
	}  
	

//	
//	//updating comment
//	public int updateCommentCount(int tid) {
//	// TODO Auto-generated method stub
//	int i= commentRepository.findByTweetId(tid)+1;
//	System.out.println("id"+commentRepository.findByTweetId(tid));
//	return commentRepository.setUpdateComment(i, tid);
//	}

	
	
}