package com.demo.beans;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="tweet")
public class Tweet {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int tweet_id;
	private String tweet_content;
	private int like_count;
	private int comment_count;
	@CreationTimestamp
	private LocalDateTime created_at;
	@CreationTimestamp
	private LocalDateTime updated_at;
	
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="user_id")
	private User1 user;
	
	@OneToMany(mappedBy = "tweet")
	@JsonIgnore
	private List<Comment> comments;
	
	public Tweet() {
		super();
	}
	

	public Tweet(int tweet_id, String tweet_content, int like_count, int comment_count) {
		super();
		this.tweet_id = tweet_id;
		this.tweet_content = tweet_content;
		this.like_count = like_count;
		this.comment_count = comment_count;
		//this.comments = comments;
	}



	public Tweet(int tweet_id, String tweet_content, int like_count, int comment_count, LocalDateTime created_at,
			LocalDateTime updated_at, User1 user, List<Comment> comments) {
		super();
		this.tweet_id = tweet_id;
		this.tweet_content = tweet_content;
		this.like_count = like_count;
		this.comment_count = comment_count;
		this.created_at = created_at;
		this.updated_at = updated_at;
		this.user = user;
		this.comments = comments;
	}

	public int getTweet_id() {
		return tweet_id;
	}

	public void setTweet_id(int tweet_id) {
		this.tweet_id = tweet_id;
	}

	public String getTweet_content() {
		return tweet_content;
	}

	public void setTweet_content(String tweet_content) {
		this.tweet_content = tweet_content;
	}

	public int getLike_count() {
		return like_count;
	}

	public void setLike_count(int like_count) {
		this.like_count = like_count;
	}

	public int getComment_count() {
		return comment_count;
	}

	public void setComment_count(int comment_count) {
		this.comment_count = comment_count;
	}

	public LocalDateTime getCreated_at() {
		return created_at;
	}

	public void setCreated_at(LocalDateTime created_at) {
		this.created_at = created_at;
	}

	public LocalDateTime getUpdated_at() {
		return updated_at;
	}

	public void setUpdated_at(LocalDateTime updated_at) {
		this.updated_at = updated_at;
	}

	public User1 getUser() {
		return user;
	}

	public void setUser(User1 user) {
		this.user = user;
	}

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}


	@Override
	public String toString() {
		return "Tweet [tweet_id=" + tweet_id + ", tweet_content=" + tweet_content + ", like_count=" + like_count
				+ ", comment_count=" + comment_count + ", created_at=" + created_at + ", updated_at=" + updated_at
				+ ", user=" + user + ", comments=" + comments + "]";
	}
	
	
}
