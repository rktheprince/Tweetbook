package com.demo.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.Friends;
import com.demo.controller.FriendController;
import com.demo.repository.FriendRepository;
import com.demo.repository.UserRepository;

@Service
public class FriendService {

	@Autowired
	FriendRepository repo;
	@Autowired
	UserRepository urepo;
	Logger logger = LoggerFactory.getLogger(FriendService.class);

	
	public String addFollower(Friends frnd) {
		// TODO Auto-generated method stub

		int f= frnd.getFollowing();		
		int f1= frnd.getFollowers();
				
		List list = repo.findByFollowing(f1);
		List list1 = repo.findByFollowers(f);
		
		if(list.contains(f)) {
			logger.warn("Your are already following ");
			return "Your are already following ";
		}else {
			repo.save(frnd);
			logger.info("You are Following");
			return "You are Following";
		}

	}

//	retrieving following name 
	public List getFollowing(int followers) {
		List<String> frnd =  new ArrayList<>();
		List friends= repo.findByFollowing(followers);

		int a= friends.size();
		
		if(friends.isEmpty()||friends==null) {
			frnd.add("You are not following user");			 
		}else {
			for(int i=0;i<a;i++) {
				int following=  (int) friends.get(i);
//				System.out.println(urepo.findByUseName(following));
				
				frnd.add(urepo.findByUseName(following));

			}
//			logger.info(""+frnd);
		}
		return frnd;	
	}
	
//	retrieving followers name 
	public List getFollowers(int following) {
		// TODO Auto-generated method stub
		List<String> frnd =  new ArrayList<>();
		List friends= repo.findByFollowers(following);
		
		int a= friends.size();
		if(friends.isEmpty()||friends==null) {
			logger.warn("No user is following you");
			
			frnd.add( "No user is following you");
		}else {
			for(int i=0;i<a;i++) {
				
				int followers=  (int) friends.get(i);				
				frnd.add(urepo.findByUseName(followers));

			}
			
//			logger.info(""+frnd);
		}	
		return frnd;	
	}

	
	// Unfollowing user
	public void unfollow(int follower,int following) {
	// TODO Auto-generated method stub

	 Friends friend = repo.findByFollowing2(follower,following);
	System.out.println(friend);
	repo.deleteById(friend.getFid());

	}
	
	//---get count
	public int getFollowingCount(int fid) {
	// TODO Auto-generated method stub
	return repo.getFollowingCount(fid);
	}

	 public int getFollowersCount(int follower) {
	// TODO Auto-generated method stub
	return repo.getFollowersCount(follower);
	}

}