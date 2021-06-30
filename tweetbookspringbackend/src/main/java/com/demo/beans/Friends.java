package com.demo.beans;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="friend")
public class Friends {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int fid;
	private int following;
	private int followers;

	
	@JsonBackReference("user")
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id", nullable = false)
	private User1 user;

	public Friends() {
		super();
		// TODO Auto-generated constructor stub
	}
	 
	public Friends(int fid, int following ,int followers,User1 user) {
		super();
		this.fid = fid;
		this.following = following;
		this.setFollowers(followers);
		this.user = user;
	}

	public int getFid() {
		return fid;
	}

	public void setFid(int fid) {
		this.fid = fid;
	}

	public int getFollowing() {
		return following;
	}

	public void setFollowing(int following) {
		this.following = following;
	}
	public int getFollowers() {
		return followers;
	}

	public void setFollowers(int followers) {
		this.followers = followers;
	}

	public User1 getUser() {
		return user;
	}

	public void setUser(User1 user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Friends [fid=" + fid + ", following=" + following + ", followers=" + followers + ", user=" + user + "]";
	}

	

	

	
	
  

}
