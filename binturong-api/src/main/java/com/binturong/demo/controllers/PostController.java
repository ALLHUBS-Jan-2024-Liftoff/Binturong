package com.binturong.demo.controllers;


import com.binturong.demo.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.binturong.demo.entities.Post;
import java.util.List;


@RestController
@RequestMapping("/userfeed")
@CrossOrigin
public class PostController {

    @Autowired
    private PostService postService;

    @PostMapping("")
    public String submitPost(@RequestBody Post post){
        postService.savePost(post);

        return "Posted";
    }

    @GetMapping("/getAll")
    public List<Post> postFeed(){
        return postService.getAllPosts();
    }

}
