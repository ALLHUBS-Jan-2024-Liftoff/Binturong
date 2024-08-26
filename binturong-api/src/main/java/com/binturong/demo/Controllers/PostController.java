package com.binturong.demo.Controllers;



import com.binturong.demo.entities.Comments;
import com.binturong.demo.repositorys.PostRepository;
import com.binturong.demo.repositorys.UserRepository;
import com.binturong.demo.services.CommentService;
import com.binturong.demo.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.binturong.demo.entities.Post;
import java.util.List;


@RestController
@RequestMapping("/userFeed")
@CrossOrigin
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PostRepository postRepository;


    @PostMapping("/newpost")
    public String submitPost(@RequestParam String title, @RequestParam String text, @RequestParam String geoTag, @RequestParam String file) {
        Post newPost = new Post();
        //removed user for auth issues
//        newPost.setUser(userRepository.findById(userId).get());
        newPost.setTitle(title);
        newPost.setText(text);
        newPost.setGeoTag(geoTag);
        newPost.setFile(file);
        postService.savePost(newPost);

        return "Posted";
    }

    @GetMapping("/getAll")
    public List<Post> postFeed() {
        return postService.getAllPosts();
    }

    @GetMapping("getPost")
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
        Post updatePost = postRepository.findById(postId).get();
        updatePost.setTitle(title);
        updatePost.setText(text);
        updatePost.setGeoTag(geoTag);
        updatePost.setFile(file);


        return postRepository.save(updatePost);
    }
}

