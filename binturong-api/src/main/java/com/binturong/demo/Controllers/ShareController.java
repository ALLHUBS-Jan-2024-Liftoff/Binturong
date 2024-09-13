package com.binturong.demo.Controllers;

import com.binturong.demo.entities.Shares;
import com.binturong.demo.entities.Post;
import com.binturong.demo.entities.User;
import com.binturong.demo.services.ShareService;
import com.binturong.demo.services.PostService;
import com.binturong.demo.repositorys.UserRepository;
import com.binturong.demo.services.ShareServiceImpl;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/shares")
@CrossOrigin
public class ShareController {

    @Autowired
    private ShareService shareService;

    @Autowired
    private PostService postService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/share")
    public ResponseEntity<?> sharePost(@RequestParam Integer postId, @RequestParam Integer userId) {
        Post post = postService.getPostById(postId);
        User user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            throw new EntityNotFoundException(("User not found"));
        }

        if (post != null && user != null) {
            Shares share = new Shares();
            share.setPost(post);
            share.setUser(user);
            shareService.saveShare(share);

            return ResponseEntity.ok("Post shared!");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Post or User not found~");
        }
    }

    @PostMapping("/unshare")
    public ResponseEntity<?> unsharePost(@RequestParam Integer postId, @RequestParam Integer userId) {
        Post post = postService.getPostById(postId);
        User user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            throw new EntityNotFoundException("User not found~");
        }

        if (post != null && user != null) {
            shareService.deleteShareByPostAndUser(post, user);

            return ResponseEntity.ok("Post unshared suscessfully!");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Post or User not found~");
        }
    }
}
