package com.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.demo.beans.SearchDto;
import com.demo.beans.User1;

public interface SearchRepository extends CrudRepository<User1,Integer> {
	
	@Query("SELECT new com.demo.beans.SearchDto(s1.first_name,s1.last_name,s1.username) FROM User1 s1 where s1.username=:username")
    List<SearchDto> SearchQuery(String username);
	


}
