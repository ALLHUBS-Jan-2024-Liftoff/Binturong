package com.binturong.demo.Controllers;


import com.binturong.demo.entities.Post;
import com.binturong.demo.entities.Saves;
import com.binturong.demo.entities.User;
import com.binturong.demo.repositorys.PostRepository;
import com.binturong.demo.repositorys.SavesRepository;
import com.binturong.demo.repositorys.UserRepository;
import com.binturong.demo.services.SavesService;
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

        Saves newSave = new Saves();
        newSave.setUser(userRepository.findById(userId).get());
        newSave.setPost(postRepository.findAllById(postId));
        savesService.saveSaves(newSave);
        return "post Saved";
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
