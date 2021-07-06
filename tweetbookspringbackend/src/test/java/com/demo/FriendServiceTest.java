package com.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertSame;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.demo.beans.Friends;
import com.demo.beans.User1;
import com.demo.services.FriendService;

@SpringBootTest
public class FriendServiceTest {

	

	 @Autowired
	FriendService service;
	@Test
	public void followingUser() {
	// System.out.println(service.getFollowing(0));"You cannot following yourself"

	 User1 user1= new User1(1,"anushia","kumar","anu12","user","anu2gmail.com","1abc",2111223435,null);
	Friends f= new Friends(0,1,1,user1);
	System.out.println(f);
	System.out.println(service.addFollower(f));
	assertEquals("Your are already following ", service.addFollower(f));

	}
	@Test
	public void notFollowingUser() {

	 System.out.println(service.getFollowing(0));
	assertEquals("[You are not following user]",service.getFollowing(0).toString() );
	}
	@Test
	public void noFollowers() {

	 System.out.println(service.getFollowers(0));
	assertEquals("[No user is following you]",service.getFollowers(0).toString() );
	}
	@Test
	public void followersCount() {
	System.out.println("Followers c"+service.getFollowersCount(0));
	assertSame(0,service.getFollowersCount(0));
	}
	@Test
	public void followingCount() {
	System.out.println("Following c"+service.getFollowingCount(0));

	 assertSame(0,service.getFollowingCount(0));
	}
	}

