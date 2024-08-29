package com.binturong.demo.controllers;


import com.binturong.demo.entities.Post;
import com.binturong.demo.entities.Saves;
import com.binturong.demo.entities.User;
import com.binturong.demo.repositorys.PostRepository;
import com.binturong.demo.repositorys.UserRepository;
import com.binturong.demo.services.SavesService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/userFeed")
@CrossOrigin
public class SaveControllerUserFeed {

    @Autowired
    private SavesService savesService;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/savepost")
    private String addPostSave(@RequestParam Integer postId, @RequestParam Integer userId) {
        User user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            throw new EntityNotFoundException("User not found");
        }
        Post post = postRepository.findById(postId).orElse(null);
        if (post == null) {
            throw new EntityNotFoundException("Post not found");
        }

        if (user != null && post != null) {
            Saves newSave = new Saves();
            newSave.setUser(user);
            newSave.setPost(post);
            savesService.saveSaves(newSave);
            return "Post saved";
        } else {
            return "Post or User not found";
        }
    }

    @GetMapping
    private List<Saves> getUserSaves(@RequestParam Integer userId) {
        User user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            throw new EntityNotFoundException("User not found");
        }
        if (user != null) {
            return savesService.getAllSaves(user);
        } else {
            return null;
        }
    }


}
