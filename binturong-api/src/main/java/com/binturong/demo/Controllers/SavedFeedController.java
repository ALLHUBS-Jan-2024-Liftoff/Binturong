package com.binturong.demo.controllers;


import com.binturong.demo.entities.Saves;
import com.binturong.demo.entities.User;
import com.binturong.demo.repositorys.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/saveduserfeed")
@CrossOrigin
public class SavedFeedController {

    @Autowired
    private PostRepository postRepository;

    @GetMapping("")
    public String showSavedPosts(User user){
        postRepository.findAllById(user.getSaves());
        return "redirect:";
    }
}
