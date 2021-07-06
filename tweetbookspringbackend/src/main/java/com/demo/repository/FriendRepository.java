package com.demo.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.beans.Friends;

@Repository
public interface FriendRepository extends JpaRepository<Friends, Integer>{
//
//	@Query("select f.following from Friends f where f.followers=?1")
//	List findByFollowing(int friends);
//	
//	@Query("select f.followers  from Friends f where f.following=?1")
//	List findByFollowers(int following);
	
//	@Query("select f from Friends f where f.following=?1")
//	Friends findByFollowing1(List following);
//	
//	
//	@Query("select f from Friends f where f.following=?1")
//	Friends findByFollowers1(int friends);
//	
//	@Query("select f from Friends f where f.following=?1")
//	Friends findByFollowing2(int following);

	
	@Query("select f.following from Friends f where f.followers=?1")
	List findByFollowing(int friends);
	@Query("select f.followers from Friends f where f.following=?1")
	List findByFollowers(int following);
	// @Query("select f from Friends f where f.following=?1")
	// Friends findByFollowing1(List following);
	//
	//
	@Query("select f from Friends f where f.following=?1")
	Friends findByFollowers1(int friends);
	@Query("select f from Friends f where f.followers=?1 and f.following=?2")
	Friends findByFollowing2(int follower,int following);
	
	@Query("select count(following) from Friends f where f.followers=?1")
	int getFollowingCount(int fid);
	@Query("select count(followers) from Friends f where f.following=?1")
	int getFollowersCount(int follower);
}