package com.binturong.demo.Controllers;

import com.binturong.demo.entities.Comments;
import com.binturong.demo.entities.Post;
import com.binturong.demo.entities.User;
import com.binturong.demo.repositorys.PostRepository;
import com.binturong.demo.repositorys.UserRepository;
import com.binturong.demo.services.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/userFeed")
@CrossOrigin
public class CommentsControllerUserFeed {

    @Autowired
    private CommentService commentService;

    @Autowired
    private PostRepository postRepository;

    @Autowired UserRepository userRepository;

    @GetMapping("/viewcomments")
    public List<Comments> viewComments(@RequestParam Integer postId) { return
        commentService.getPostComments(postRepository.findAllById(postId));
    }

    @PostMapping("/addcomment")
    public String addComment(@RequestParam Integer userId,@RequestParam Post postId, @RequestParam String text, @RequestParam String file){
        Comments newComment = new Comments();
        newComment.setUser(userRepository.findById(userId).get());
        newComment.setCommentText(text);
        newComment.setFile(file);
        newComment.setPost(postId);
        commentService.saveComments(newComment);

        return "Comment Saved";


    }

}
