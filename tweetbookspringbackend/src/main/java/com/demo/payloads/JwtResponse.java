package com.demo.payloads;

import java.util.List;

public class JwtResponse {
	private String token;
	private String type = "Bearer";
	private int id;
	private String username;
	private String first_name;
	private String last_name;
	private String password;
	private String email_id;
	private long phone_no;
	
	
	private List<String> roles;

 
	public JwtResponse(String token, String type, int id, String username, String first_name, String last_name,
			String password, String email_id, long phone_no, List<String> roles) {
		super();
		this.token = token;
		this.type = type;
		this.id = id;
		this.username = username;
		this.first_name = first_name;
		this.last_name = last_name;
		this.password = password;
		this.email_id = email_id;
		this.phone_no = phone_no;
		this.roles = roles;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	public long getPhone_no() {
		return phone_no;
	}

	public void setPhone_no(long phone_no) {
		this.phone_no = phone_no;
	}

	public String getAccessToken() {
		return token;
	}

	public void setAccessToken(String accessToken) {
		this.token = accessToken;
	}

	public String getTokenType() {
		return type;
	}

	public void setTokenType(String tokenType) {
		this.type = tokenType;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public List<String> getRoles() {
		return roles;
	}
}
