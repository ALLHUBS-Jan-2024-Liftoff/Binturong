package controller;

import com.binturong.demo.entities.Post;
import com.binturong.demo.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/postFeed")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class PostFeedController {

    @Autowired
    private PostService postService;

    @GetMapping("/getAll")
    public List<Post> getAllPosts() {
        return postService.getAllPosts();
    }
}

