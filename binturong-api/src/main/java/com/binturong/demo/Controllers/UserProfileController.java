package com.binturong.demo.controllers;


import com.binturong.demo.entities.Post;
import com.binturong.demo.repositorys.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.binturong.demo.services.PostService;
import java.util.List;

@RestController
@RequestMapping("/userprofile")
@CrossOrigin
public class UserProfileController {

    @Autowired
    private PostService postService;

    @Autowired
    private PostRepository postRepository;

    @PostMapping("")
    public String submitPost(@RequestBody Post post){
        postService.savePost(post);

        return "Posted";
    }

    @GetMapping("/getAllUsersPosts")
    public List<Post> postFeed(){
        return postService.getAllPosts();
    }

    @DeleteMapping("/delete/{id}")
    public String deletePost(@PathVariable Integer id){
       if(!postRepository.existsById(id)){
           return "Error something went wrong";
       }
       postRepository.deleteById(id);
        return "Post Deleted";
    }


}



