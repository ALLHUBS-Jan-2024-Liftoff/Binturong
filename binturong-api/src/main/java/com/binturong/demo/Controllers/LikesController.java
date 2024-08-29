// handles the like feature on posts - toggles the post as
// liked or unliking it and changing the state back

package com.binturong.demo.controllers;

import com.binturong.demo.entities.Likes;
import com.binturong.demo.entities.Post;
import com.binturong.demo.entities.User;
import com.binturong.demo.services.LikesService;
import com.binturong.demo.services.PostService;
import com.binturong.demo.repositorys.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.apache.coyote.Response;  // what do?
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/likes")
@CrossOrigin
public class LikesController {

    @Autowired
    private LikesService likesService;

    @Autowired
    private PostService postService;

    @Autowired
    private UserRepository userRepository;

    // handles the like Response and checks for the post and user to match
    @PostMapping("/like")
    public ResponseEntity<?> likePost(@RequestParam Integer postId, @RequestParam Integer userId) {
        Post post = postService.getPostById(postId);
        User user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            throw new EntityNotFoundException("User not found");
        }


        if (post != null && user != null) {
            Likes like = new Likes();
            like.setPost(post);
            like.setUser(user);
            likesService.saveLike(like);

            return ResponseEntity.ok("Post liked successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Post or User not found");
        }
    }

    // handles the unliking of posts and after verifying the post unlikes the post
    // and deletes from that post's like count
    @PostMapping("/unlike")
    public ResponseEntity<?> unlikePost(@RequestParam Integer postId,
                                        @RequestParam Integer userId) {
        Post post = postService.getPostById(postId);
        User user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            throw new EntityNotFoundException("User not found");
        }


        if (post != null && user != null) {
            likesService.deleteLikeByPostAndUser(post, user);

            return ResponseEntity.ok("Post unliked successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Post or User not found");
        }
    }
}
