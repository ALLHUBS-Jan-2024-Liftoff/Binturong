package com.binturong.demo.controllers;

import com.binturong.demo.entities.Comments;
import com.binturong.demo.services.CommentService;

import com.binturong.demo.entities.Post;
import com.binturong.demo.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/userfeed")
@CrossOrigin
public class PostController {

    @Autowired
    private PostService postService;


    @PostMapping("/newpost")
    public String submitPost(@RequestParam String title, @RequestParam String text,
                             @RequestParam String geoTag, @RequestParam String file)
    {
        Post newPost = new Post();
        newPost.setTitle(title);
        newPost.setText(text);
        newPost.setGeoTag(geoTag);
        newPost.setFile(file);
        postService.savePost(newPost);

        return "Posted";
    }

    @GetMapping("/getAll")
    public List<Post> postFeed(){
        return postService.getAllPosts();
    }

    @PostMapping("/{id}/share")
    public ResponseEntity<?> sharePost(@PathVariable Integer id) {
        Optional<Post> postOptional = postService.getPostById(id);
        if (postOptional.isPresent()) {
            Post post = postOptional.get();
            post.setShares(post.getShares() + 1);
            postService.savePost(post);
            return ResponseEntity.ok(post);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Post not found");
        }
    }
}


