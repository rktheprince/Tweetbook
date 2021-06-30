package com.demo.services;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.demo.beans.User1;
import com.fasterxml.jackson.annotation.JsonIgnore;

public class UserDetailsImpl implements UserDetails {
	private static final long serialVersionUID = 1L;

	private int id;

	private String username;
	private String first_name;
	private String last_name;
	//private String password;
	private String email_id;
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

	private long phone_no;
	

	@JsonIgnore
	private String password;

	private Collection<? extends GrantedAuthority> authorities;
	private static SimpleGrantedAuthority authority;

	
	public UserDetailsImpl(int id, String username, String first_name, String last_name, String email_id, long phone_no,
			String password, Collection<? extends GrantedAuthority> authorities) {
		super();
		this.id = id;
		this.username = username;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email_id = email_id;
		this.phone_no = phone_no;
		this.password = password;
		this.authorities = authorities;
	}

	public static UserDetailsImpl build(User1 user) {
		/*List<GrantedAuthority> authorities = user.getRoles().stream()
				.map(role -> new SimpleGrantedAuthority(role.getName().name()))
				.collect(Collectors.toList());
*/
		
		authority = new SimpleGrantedAuthority(user.getRole());
		List<GrantedAuthority> authorities= new ArrayList<GrantedAuthority>();
		authorities.add(authority);
	
		return new UserDetailsImpl(
                user.getUser_id(),
                user.getUsername(),
                user.getFirst_name(), 
                user.getLast_name(),
                user.getEmail_id(),
                user.getPhone_no(),
                user.getPassword(),
                  authorities);
	}
		
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	public int getId() {
		return id;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return username;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;
		UserDetailsImpl user = (UserDetailsImpl) o;
		return Objects.equals(id, user.id);
	}
}
