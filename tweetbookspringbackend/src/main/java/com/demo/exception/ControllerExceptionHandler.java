package com.demo.exception;

import javax.xml.bind.ValidationException;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;



@ControllerAdvice
public class ControllerExceptionHandler {

	@ResponseBody
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler
	ErrorMessage exceptionHandler(ValidationException e) {
		return new ErrorMessage("400",e.getMessage());
	}

    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler
    ErrorMessage exceptionHandler(NullPointerException e)
    {
	 	  	return new ErrorMessage("400", e.getMessage());
    }
	
}
