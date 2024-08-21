package com.binturong.demo.Controllers;



import com.binturong.demo.entities.Comments;
import com.binturong.demo.services.CommentService;
import com.binturong.demo.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.binturong.demo.entities.Post;
import java.util.List;


@RestController
@RequestMapping("/userfeed")
@CrossOrigin
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    private CommentService commentService;



    @PostMapping("/newpost")
    public String submitPost(@RequestParam String title, @RequestParam String text, @RequestParam String geoTag, @RequestParam String file){
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

    @GetMapping("/viewcomments")
    public List<Comments> viewComments(@RequestParam Integer postId) {
        return null;
    }

    @PostMapping("/addcomment")
    public String addComment(@RequestParam Post postId, @RequestParam String text, @RequestParam String file){
        Comments newComment = new Comments();
        newComment.setCommentText(text);
        newComment.setFile(file);
        newComment.setPost(postId);

        return null;


    }


    }


