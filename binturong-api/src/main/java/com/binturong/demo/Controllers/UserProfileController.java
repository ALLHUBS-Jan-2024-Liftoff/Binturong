package com.binturong.demo.Controllers;


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

    @PostMapping("/delete")
    public String deletePost(@RequestParam Integer postId){
       if(!postRepository.existsById(postId)){
           return "Error something went wrong";
       }
       postRepository.deleteById(postId);
        return "Post Deleted";
    }

    @PutMapping("/update")
    public String UpdatePost(@RequestParam Integer postId, @RequestBody Post post) {
        return "test";
    }


}



