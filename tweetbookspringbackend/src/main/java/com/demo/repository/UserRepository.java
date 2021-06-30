package com.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.beans.User1;
import com.demo.beans.User1.ERole;

@Repository
public interface UserRepository extends JpaRepository<User1, Long> {
  Optional<User1> findByUsername(String username);

  Boolean existsByUsername(String username);
  //Boolean existsByEmail(String email);
  Optional<User1> findByRole(ERole roleUser);

  
  @Query("select u.username from User1 u where u.user_id=?1")
	String findByUseName(int id);
}