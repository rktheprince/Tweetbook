package com.demo.controller;

import java.util.List;
import java.util.Optional;

import javax.xml.bind.ValidationException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.demo.beans.Friends;
import com.demo.beans.User1;
import com.demo.services.FriendService;

@RestController
@CrossOrigin
public class FriendController{

	@Autowired
	FriendService service;

	Logger logger = LoggerFactory.getLogger(FriendController.class);

//------------following user
	@PostMapping("/add/following")
	@PreAuthorize("hasRole('ROLE_USER')")
	public String addFollower(@RequestBody Friends friend)throws ValidationException{

		logger.info(""+friend);
		Friends frnd= new Friends();
		if(friend.getUser().getUser_id()==friend.getFollowing()) {
			throw new ValidationException("You cannot following yourself");
		}else {	
			logger.info(""+friend);
			frnd.setFollowers(friend.getUser().getUser_id());
			frnd.setFollowing(friend.getFollowing());
			User1 u= new User1();
			u.setUser_id(friend.getUser().getUser_id());
			frnd.setUser(u);
		}
		System.out.println(frnd);
		return service.addFollower(frnd);
	}

//--------------retrieving followers name 
	
	@GetMapping("/getfriend/follower/{following}")
	@PreAuthorize("hasRole('ROLE_USER')")
	public List getFollowers(@PathVariable ("following") int following) {
		logger.info(""+service.getFollowers(following));
		return service.getFollowers(following);
	}

//--------------retrieving following name 
	
	@GetMapping("/getfriend/following/{follower}")
	@PreAuthorize("hasRole('ROLE_USER')")
	public List getFollowing(@PathVariable ("follower") int follower) {
		logger.info(""+service.getFollowing(follower));
		return service.getFollowing(follower);
	}

//---------------unfollow  user

	@DeleteMapping("/getfriend/unfollowing/{follower}/{following}")
	@PreAuthorize("hasRole('ROLE_USER')")
	public String unfollowUSer(@PathVariable ("follower") int follower,@PathVariable ("following") int following) {
		service.unfollow(follower,following);
		logger.info("Unfollowed user");
		return "Unfollowed user";
	}

	
	//---------getcount
	@GetMapping("/getfriend/following/count/{fid}")
	@PreAuthorize("hasRole('ROLE_USER')")
	public int getFollowingCount(@PathVariable ("fid") int fid) {
	logger.info(""+service.getFollowing(fid));
	return service.getFollowingCount(fid);
	}
	@GetMapping("/getfriend/follower/count/{follower}")
	@PreAuthorize("hasRole('ROLE_USER')")
	public int getFollowersCount(@PathVariable ("follower") int follower) {
	logger.info(""+service.getFollowing(follower));
	return service.getFollowersCount(follower);
	}
}