package com.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.demo.beans.SearchDto;
import com.demo.repository.SearchRepository;

@Service
public class SearchService {
	
	@Autowired
	SearchRepository searchrep;
	
	public List<SearchDto> getuser(String username) {
		List<SearchDto> list = searchrep.SearchQuery(username);
		list.forEach(l -> System.out.println(l));
		return list;
	}

}
