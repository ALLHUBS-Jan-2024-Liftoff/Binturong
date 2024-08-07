package com.binturong.demo.controllers;


import com.binturong.demo.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.binturong.demo.models.Post;
import java.util.List;


@RestController
@RequestMapping("/userfeed")
public class PostController {

    @Autowired
    private PostService postService;

    @PostMapping("/post")
    public String submitPost(@RequestBody Post post){
        postService.savePost(post);

        return "Posted";
    }

    @GetMapping("/userfeed")
    public List<Post> postFeed(){
        return postService.getAllPosts();
    }

}
