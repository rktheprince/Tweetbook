package com.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.demo.beans.Comment;
import com.demo.beans.Tweet;




public interface CommentRepository extends JpaRepository<Comment, Integer>{
	
	

//	@Query("SELECT a FROM Comment a WHERE a.tweet.tweet_id=:tweet_id")
//	List<Tweet> findCommentByTweetId(int tweet_id);

	@Query("SELECT a FROM Comment a WHERE a.tweet.tweet_id=:tweet_id")
	List<Comment> findByTweetUserId(int tweet_id);

	@Transactional
	@Modifying
    @Query("UPDATE Comment c set c.comment_content=?1 where c.comment_id=?2 AND c.tweet.tweet_id=?3")
	public int setByCommentId(String comment,int cid,int tweetid);
	

	
//	
//	//---update comment
//		@Query("SELECT a.comment_count FROM Tweet a WHERE a.tweet_id=:tweet_id")
//		int findByTweetId(int tweet_id);
//		
//		@Transactional
//		@Modifying
//		@Query("UPDATE Tweet t SET t.comment_count=?1 where t.tweet_id= ?2")
//		int setUpdateComment(int i,int id);
//		
}