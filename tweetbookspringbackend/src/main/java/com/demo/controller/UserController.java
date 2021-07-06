package com.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.User1;
import com.demo.repository.UserRepositoryP;
import com.demo.services.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private UserRepositoryP userRepository;
	
	@GetMapping("/ListAllUsers")
	// @PreAuthorize("hasRole('ROLE_USER')")
	   @PreAuthorize("hasRole('ROLE_USER')or hasRole('ROLE_ADMIN')")
	public List<User1> getAllUsers(){
		return userService.getAllUsers();
	}
	
	@GetMapping("/GetById/{user_id}")
	 @PreAuthorize("hasRole('ROLE_USER')")
	public User1 getUserById(@PathVariable("user_id") int user_id){
		return userService.getUserById(user_id);
	}
	
	@GetMapping("/GetByUsername/{username}")
	 @PreAuthorize("hasRole('ROLE_USER')")
	public User1 getUserByUserName(@PathVariable("username") String username){
		return userService.getUserByUsername(username);
	}
	
	@GetMapping("/GetUserName")
	public List<String> getUsername() {
		return userService.getUsername();
	}
	
	@PostMapping("/AddUsers")
	 @PreAuthorize("hasRole('ROLE_USER')")
	public User1 createUser(@RequestBody User1 user) {
		return userService.createUser(user);
	} 
	
	@PutMapping("/UpdateUser/{user_id}")
	 @PreAuthorize("hasRole('ROLE_USER')")
	public User1 updateUser(@RequestBody User1 user, @PathVariable("user_id") int user_id) {
		Optional<User1> optional1 = userRepository.findById(user_id);
		if (!optional1.isPresent()) {
			return null;
		}
		User1 user1 = userRepository.save(user);
		 return user1;
		
	}
	
	@DeleteMapping("/DeleteUser/{user_id}")
  @PreAuthorize("hasRole('ROLE_USER')or hasRole('ROLE_ADMIN')")	 
	public void deleteUser(@PathVariable("user_id") int user_id) {
		userService.deleteUserById(user_id);
	}
	
	@GetMapping("/ListAllUser")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public List<User1> getAllUser(){
	return userService.getAllUser();
	}
}
