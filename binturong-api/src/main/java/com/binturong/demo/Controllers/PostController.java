package com.binturong.demo.Controllers;

import com.binturong.demo.entities.Comments;
import com.binturong.demo.repositorys.LikeRepository;
import com.binturong.demo.repositorys.PostRepository;
import com.binturong.demo.repositorys.UserRepository;
import com.binturong.demo.services.CommentService;
import com.binturong.demo.entities.Post;
import com.binturong.demo.services.PostService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/userFeed")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true", maxAge = 3600)
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private LikeRepository likeRepository;

    @PostMapping("/newpost")
    public String submitPost(@RequestParam Integer userId, @RequestParam String title, @RequestParam String text,
                             @RequestParam String geoTag, @RequestParam String file) {

        Post newPost = new Post();
        newPost.setUser(userRepository.findById(userId).orElseThrow(() -> new EntityNotFoundException("User not found")));
        newPost.setTitle(title);
        newPost.setText(text);
        newPost.setGeoTag(geoTag);
        newPost.setFile(file);
        postService.savePost(newPost);

        return "Posted";
    }

    @GetMapping("/getAll")
    public List<Post> postFeed() {
        return postRepository.findAll();
    }

    @GetMapping("/getPost")
    public Post getPost(@RequestParam Integer postId) {return postService.getPost(postId);}

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
        Post updatePost = postRepository.findById(postId).orElse(null);
        if (updatePost == null) {
            throw new EntityNotFoundException("Post not found");
        }

        updatePost.setTitle(title);
        updatePost.setText(text);
        updatePost.setGeoTag(geoTag);
        updatePost.setFile(file);

        return postRepository.save(updatePost);
    }

    @PostMapping("/{postId}/like")
    public ResponseEntity<String> likePost(@PathVariable Integer postId) {
        Post post = postRepository.findById(postId).orElse(null);
        if (post == null) {
            throw new EntityNotFoundException("Post not found");
        }
        post.setLikes(post.getLikes() + 1);
        postRepository.save(post);
        return ResponseEntity.ok("Post liked");
    }

//    @PostMapping("/{postId}/unlike")
//    public ResponseEntity<String> unlikePost(@PathVariable Integer postId) {
//        Post post = postRepository.findById(postId).orElse(null);
//        if (post == null) {
//            throw new EntityNotFoundException("Post not found");
//        }
//        post.setLikes(post.getLikes() - 1);
//        postRepository.save(post);
//        return ResponseEntity.ok("Post unliked");
//    }

    @PostMapping("/{postId}/share")
    public ResponseEntity<String> sharePost(@PathVariable Integer postId) {
        Post post = postRepository.findById(postId).orElse(null);
        if (post == null) {
            throw new EntityNotFoundException("Post not found");
        }
        post.setShares(post.getShares() + 1);
        postRepository.save(post);
        return ResponseEntity.ok("Post shared");
    }

}

