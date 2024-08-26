package com.binturong.demo.controllers;


import com.binturong.demo.entities.Post;
import com.binturong.demo.repositorys.PostRepository;
import com.binturong.demo.repositorys.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.binturong.demo.services.PostService;
import java.util.List;

@RestController
@RequestMapping("/userProfile")
@CrossOrigin
public class UserProfileController {

    @Autowired
    private PostService postService;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/getAllUsersPosts")
    public List<Post> postFeed(@RequestParam Integer userId){
        return postService.getAllPosts();
    }

    @PostMapping("/delete")
    public String deletePost(@RequestParam Integer postId){
       if(!postRepository.existsById(postId)){
           return "Error something went wrong";
       }
       postRepository.deleteById(postId);
        return "Post Deleted";
    }

    @PutMapping("/update")
    public Post UpdatePost(@RequestParam Integer postId, @RequestParam String title, @RequestParam String text, @RequestParam String geoTag, @RequestParam String file) {
       if(postRepository.existsById(postId)) {

           Post updatePost = postRepository.findById(postId).get();
           updatePost.setTitle(title);
           updatePost.setText(text);
           updatePost.setGeoTag(geoTag);
           updatePost.setFile(file);
           return postRepository.save(updatePost);
       }
       else{
           return null;
       }
    }

}



