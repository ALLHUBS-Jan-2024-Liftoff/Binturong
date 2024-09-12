package com.binturong.demo.Controllers;


import com.binturong.demo.dto.PostDto;
import com.binturong.demo.entities.Post;
import com.binturong.demo.repositorys.PostRepository;
import com.binturong.demo.repositorys.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
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
        return postRepository.findAllByUserId(userId);
    }

    @PostMapping("/delete")
    public String deletePost(@RequestParam Integer postId){
       if(!postRepository.existsById(postId)){
           return "Error something went wrong";
       }
       postRepository.deleteById(postId);
        return "Post Deleted";
    }

    @PutMapping("/update/{postId}")
    public Post UpdatePost(@RequestBody PostDto newPost, @PathVariable Integer postId) {
      return postRepository.findById(postId)
              .map(post -> {
                  post.setTitle(newPost.getTitle());
                  post.setText(newPost.getText());
                  post.setGeoTag(newPost.getGeoTag());
                  post.setFile(newPost.getFile());
                  return postRepository.save(post);
              }).orElse(null);
    }
}



