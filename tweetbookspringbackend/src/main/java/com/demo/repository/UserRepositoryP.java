package com.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.demo.beans.User1;

public interface UserRepositoryP extends JpaRepository<User1, Integer>{

	List<User1> findAll();
	
	@Query("select username from User1")
	List<String> getUsername();

	User1 findByUsername(String username);
	
	@Query("select u from User1 u where role='ROLE_USER'")
	List<User1> findAllUser();

}

