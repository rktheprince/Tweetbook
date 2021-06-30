package com.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PutMapping;

import com.demo.beans.Tweet;
import com.demo.beans.User1;
import com.demo.beans.User1Dto;



public interface TweetRepository extends JpaRepository<Tweet, Integer>{
	
	@Query("SELECT new com.demo.beans.User1Dto(m1.user_id) FROM User1 m1 where m1.user_id=:user_id")
    List<User1Dto> user1Query(int user_id);

	
//	@Query("select r from Review r where r.product.productId= ?1")
//	List<Review> findByReviewProductId(int productId);

	
	@Query("SELECT a FROM Tweet a WHERE a.user.user_id=:user_id")
	List<Tweet> findByTweetUserId(int user_id);
	
	//---update like
	@Query("SELECT a.like_count FROM Tweet a WHERE a.tweet_id=:tweet_id")
	int findByTweetId(int tweet_id);
	
	@Transactional
	@Modifying
	@Query("UPDATE Tweet t SET t.like_count=?1 where t.tweet_id= ?2")
	int setUpdateLike(int i,int id);
	
	//comment update 
	@Query("SELECT a.comment_count FROM Tweet a WHERE a.tweet_id=:tweet_id")
	int findByTweetId1(int tweet_id);
	
	@Transactional
	@Modifying
	@Query("UPDATE Tweet t SET t.comment_count=?1 where t.tweet_id= ?2")
	int setUpdateComment(int i,int id);
	

	
}