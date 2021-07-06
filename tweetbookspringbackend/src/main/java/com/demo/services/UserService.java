package com.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.User1;
import com.demo.repository.UserRepositoryP;

@Service
public class UserService {

	@Autowired
	private UserRepositoryP userRepository;
	
	public List<User1> getAllUsers(){
		return userRepository.findAll();
	}
	
	public List<String> getUsername() {
		return userRepository.getUsername();
	}

	public void deleteUserById(int user_id) {
		userRepository.deleteById(user_id);
	}

	public User1 createUser(User1 user) {
		return userRepository.saveAndFlush(user);
	}

	public User1 getUserById(int user_id) {
		return userRepository.getById(user_id);
	}

	public User1 getUserByUsername(String username) {
		return userRepository.findByUsername(username);
	}
	
	public List<User1> getAllUser() {
		// TODO Auto-generated method stub
		return userRepository.findAllUser();
		}
	
}
