package com.binturong.demo.controllers;


import com.binturong.demo.entities.Post;
import com.binturong.demo.entities.Saves;
import com.binturong.demo.entities.User;
import com.binturong.demo.repositorys.PostRepository;
import com.binturong.demo.repositorys.SavesRepository;
import com.binturong.demo.repositorys.UserRepository;
import com.binturong.demo.services.SavesService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/usersavedfeed")
@CrossOrigin
public class SaveControllerUserFeed {

    @Autowired
    private SavesService savesService;

    @Autowired
    private SavesRepository savesRepository;

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

    @GetMapping("/getsavedposts")
    private List<Post> getUserSaves (@RequestParam Integer userId) {
        List<Post> savedPosts = new ArrayList<>();
        List<Saves> savesList =savesRepository.findAllByUserId(userId);
        savedPosts =savesList.stream().map(save ->
            save.getPost()
        ).collect(Collectors.toList());
        System.out.println(savesList);


        return savedPosts;
    }










}
