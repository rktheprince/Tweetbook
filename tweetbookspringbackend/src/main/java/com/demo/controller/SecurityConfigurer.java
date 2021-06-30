//package com.demo.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.NoOpPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//import org.springframework.web.bind.annotation.CrossOrigin;
//
//import com.demo.jwt.AuthEntryPointJwt;
//import com.demo.jwt.AuthTokenFilter;
//import com.demo.services.UserDetailsServiceImpl;
//
//@Configuration
//@EnableWebSecurity
//@EnableGlobalMethodSecurity(
//		// securedEnabled = true,
//		// jsr250Enabled = true,
//		prePostEnabled = true)
//public class SecurityConfigurer extends WebSecurityConfigurerAdapter {
////	@Autowired
////	UserDetailsServiceImpl userDetailsService;
////
////	@Autowired
////	private AuthEntryPointJwt unauthorizedHandler;
////	
////    private static final String[] AUTH_LIST = { //
////            "/v2/api-docs", //
////            "/configuration/ui", //
////            "/swagger-resources", //
////            "/configuration/security", //
////            "/swagger-ui.html", //
////            "/webjars/**" //
////};
////	  
////
////	@Bean
////	public AuthTokenFilter authenticationJwtTokenFilter() {
////		return new AuthTokenFilter();
////	}
////
////	@Override
////	public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
////		authenticationManagerBuilder.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
////		authenticationManagerBuilder.inMemoryAuthentication().withUser("user").password(passwordEncoder().encode("password")).roles("USER").and().withUser("admin")
////        .password(passwordEncoder().encode("admin")).roles("USER", "ADMIN");
////	}
////
////	@Bean
////	@Override
////	public AuthenticationManager authenticationManagerBean() throws Exception {
////		return super.authenticationManagerBean();
////	}
////
////	@Bean
////	public PasswordEncoder passwordEncoder() {
////		return new BCryptPasswordEncoder();
////	}
////
////	@Override
////	protected void configure(HttpSecurity http) throws Exception {
////		http.cors().and().csrf().disable().exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
////				.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
////				.authorizeRequests()
////				.antMatchers("/auth/**").permitAll().antMatchers("/api/test/**").permitAll().antMatchers("/")
////				.permitAll()
////				.and()	
////				.authorizeRequests()
////				.antMatchers(AUTH_LIST)
////				.authenticated()
////				.and()
////				.httpBasic();
//////				.authorizeRequests()
//////	             .antMatchers("/swagger-resources/**", "*.html", "/api/v1/swagger.json")
//////	             .hasRole("SWAGGER")
//////				.anyRequest()
//////				.authenticated();
////		http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
////		// http.addFilterBefore(authenticationJwtTokenFilter(),
////		// UsernamePasswordAuthenticationFilter.class);
////		
////		//  http.authorizeRequests().antMatchers(AUTH_LIST).authenticated().and().httpBasic();
////         
////	
////	
////	}
//	
//	
//	
//	
//	
//}





package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.bind.annotation.CrossOrigin;

 

import com.demo.jwt.AuthEntryPointJwt;
import com.demo.jwt.AuthTokenFilter;
import com.demo.services.UserDetailsServiceImpl;

 

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(
        // securedEnabled = true,
        // jsr250Enabled = true,
        prePostEnabled = true)
public class SecurityConfigurer extends WebSecurityConfigurerAdapter {
    private static final String[] AUTH_LIST = { //
            "/v2/api-docs", //
            "/configuration/ui", //
            "/swagger-resources", //
            "/configuration/security", //
            "/swagger-ui.html", //
            "/webjars/**" //
};


    @Autowired
    UserDetailsServiceImpl userDetailsService;

 

    @Autowired
    private AuthEntryPointJwt unauthorizedHandler;

 

    @Bean
    public AuthTokenFilter authenticationJwtTokenFilter() {
        return new AuthTokenFilter();
    }

 

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    	auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());    
    	auth.inMemoryAuthentication().withUser("user").password(passwordEncoder().encode("password")).roles("USER").and().withUser("admin")
                            .password(passwordEncoder().encode("admin")).roles("USER", "ADMIN");
    }
    
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

 

    @Override
    protected void configure(HttpSecurity http) throws Exception {
    	http.cors().and().csrf().disable()
        .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
        .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
        .authorizeRequests().antMatchers("/auth/**").permitAll()
        .antMatchers("/api/test/**").permitAll()
        .antMatchers("/").permitAll()
        .and()
        .authorizeRequests()
        .antMatchers(AUTH_LIST)
        .permitAll()
        .anyRequest().authenticated()
        .and()
        .httpBasic();
    http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);   
    //	http.authorizeRequests().antMatchers(AUTH_LIST).authenticated().and().httpBasic();
    }

 

    @Bean
    public PasswordEncoder passwordEncoder() {
            return new BCryptPasswordEncoder();
    }

 

    }

