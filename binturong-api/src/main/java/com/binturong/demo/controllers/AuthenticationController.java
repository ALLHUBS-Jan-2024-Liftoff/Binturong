package com.binturong.demo.controllers;

import com.binturong.demo.models.User;
import com.binturong.demo.models.dto.LoginFormDTO;
import com.binturong.demo.models.dto.RegisterFormDTO;
import com.binturong.demo.repositorys.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;


public class AuthenticationController {

    @Autowired
    UserRepository userRepository;

    private static final String userSessionKey = "user";

    //handles checking for the user ID and then retrieving it that userID is found.
    public User getUserFromSession (HttpSession session) {
        Integer userId = (Integer) session.getAttribute(userSessionKey);
        if (userId == null) {
            return null;
        }

        Optional <User> user = userRepository.findByUsername(userId);

        if (user.isEmpty()) {
            return null;
        }

        return user.get();
    }

    //handles user registration
    private static void setUserInSession (HttpSession session, User user) {
        session.setAttribute(userSessionKey, user.getId());
    }











}
