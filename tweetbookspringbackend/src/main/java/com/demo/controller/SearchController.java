package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.SearchDto;
import com.demo.services.SearchService;

import io.swagger.annotations.ApiOperation;

@RestController
@CrossOrigin
public class SearchController {

	@Autowired
	SearchService searchservice;
	
	@GetMapping("/search/username/{username}")
	 @PreAuthorize("hasRole('ROLE_USER')")
	public ResponseEntity<List<SearchDto>> getUserName(@PathVariable("username")String username) {
		return new ResponseEntity<List<SearchDto>>(searchservice.getuser(username), HttpStatus.OK);
	}
}
