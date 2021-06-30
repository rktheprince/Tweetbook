package com.demo.beans;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name="comment")
public class Comment {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int comment_id;
	private String comment_content;
	@CreationTimestamp
	private LocalDateTime created_at;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "tweet_id")
	private Tweet tweet;
	public Comment() {
		super();
	}
	public Comment(int comment_id, String comment_content, LocalDateTime created_at, Tweet tweet) {
		super();
		this.comment_id = comment_id;
		this.comment_content = comment_content;
		this.created_at = created_at;
		this.tweet = tweet;
		
	}
	public int getComment_id() {
		return comment_id;
	}
	public void setComment_id(int comment_id) {
		this.comment_id = comment_id;
	}
	public String getComment_content() {
		return comment_content;
	}
	public void setComment_content(String comment_content) {
		this.comment_content = comment_content;
	}
	public LocalDateTime getCreated_at() {
		return created_at;
	}
	public void setCreated_at(LocalDateTime created_at) {
		this.created_at = created_at;
	}
	public Tweet getTweet() {
		return tweet;
	}
	public void setTweet(Tweet tweet) {
		this.tweet = tweet;
	}
	@Override
	public String toString() {
		return "Comment [comment_id=" + comment_id + ", comment_content=" + comment_content + ", created_at="
				+ created_at + ", tweet=" + tweet + "]";
	}
	
//	private int abc=tweet.getTweet_id();
}
