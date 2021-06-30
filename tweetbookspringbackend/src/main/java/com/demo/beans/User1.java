package com.demo.beans;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="user1")
public class User1 {
	
	
	public enum ERole {
		  ROLE_USER,
		  ROLE_MODERATOR,
		  ROLE_ADMIN
	}
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int user_id;
	private String first_name;
	private String last_name;
	@Column(unique=true)
	private String username;
	private String role;
	private String email_id;
	private String password;
	private long phone_no;
	//private int followers;
	
	@OneToMany(mappedBy = "user")
	@JsonIgnore
	private List<Tweet> tweets;

	public User1() {
		super();
	}

	public User1(int user_id, String first_name, String last_name, String username, String role, String email_id,
			String password, long phone_no , List<Tweet> tweets) {
		super();
		this.user_id = user_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.username = username;
		this.role = role;
		this.email_id = email_id;
		this.password = password;
		this.phone_no = phone_no;
		//this.followers = followers;
		this.tweets = tweets;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getRole() {
		return role;
	}

	public String setRole(String role) {
		return this.role = role;
	}

	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public long getPhone_no() {
		return phone_no;
	}

	public void setPhone_no(long phone_no) {
		this.phone_no = phone_no;
	}
/*
	public int getFollowers() {
		return followers;
	}

	public void setFollowers(int followers) {
		this.followers = followers;
	}
*/
	public List<Tweet> getTweets() {
		return tweets;
	}

	public void setTweets(List<Tweet> tweets) {
		this.tweets = tweets;
	}
	
}
