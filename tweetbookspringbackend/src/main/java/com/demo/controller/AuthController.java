package com.demo.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.User1;
import com.demo.beans.User1.ERole;
import com.demo.jwt.JwtUtils;
import com.demo.payloads.JwtResponse;
import com.demo.payloads.LoginRequest;
import com.demo.payloads.MessageResponse;
import com.demo.payloads.SignupRequest;
import com.demo.repository.UserRepository;
import com.demo.services.UserDetailsImpl;
import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/auth")
public class AuthController {
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserRepository userRepository;

	//@Autowired
	//1RoleRepository roleRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
		
		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();		
		List<String> roles = userDetails.getAuthorities().stream()
				.map(item -> item.getAuthority())
				.collect(Collectors.toList());

		return ResponseEntity.ok(new JwtResponse(jwt, jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getFirst_name(), userDetails.getLast_name(),
                userDetails.getPassword(),userDetails.getEmail_id(),userDetails.getPhone_no(),
                roles));
	}
	
	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
		if (userRepository.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Username is already taken!"));
		}

		// Create new user's account
		User1 user = new User1(0,signUpRequest.getFirst_name(),signUpRequest.getLast_name(),
							signUpRequest.getUsername(),null, signUpRequest.getEmail_id(),
							encoder.encode(signUpRequest.getPassword()),signUpRequest.getPhone_no(),null);

		String role=signUpRequest.getRole();
		if(role==null)
		{
			role=user.setRole("ROLE_USER");
		}
		else if(role.equalsIgnoreCase("admin"))
		{
			role=user.setRole("ROLE_ADMIN");
		}
		
		//user.setRole(role);
		userRepository.save(user);

		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}


}
