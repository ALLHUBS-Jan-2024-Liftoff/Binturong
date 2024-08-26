package com.binturong.demo.Controllers;

import com.binturong.demo.entities.Comments;
import com.binturong.demo.entities.Post;
import com.binturong.demo.entities.User;
import com.binturong.demo.repositorys.CommentsRepository;
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

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CommentsRepository commentsRepository;

    @GetMapping("/viewcomments")
    public List<Comments> viewComments(@RequestParam Integer postId) { return commentsRepository.findByPostId(postId);}

    @PostMapping("/addcomment")
    public String addComment(@RequestParam Integer postId, @RequestParam String text, @RequestParam String file){
        Comments newComment = new Comments();

        //User still needs to be worked on
//        newComment.setUser(userRepository.findById(userId).get());
        newComment.setCommentText(text);
        newComment.setFile(file);
        newComment.setPost(postRepository.findById(postId).get());
        commentService.saveComments(newComment);

        return "Comment Saved";


    }
    @PostMapping("/deleteComment")
    public String deleteComment(@RequestParam Integer commentId){
        if(!commentsRepository.existsById(commentId)){
            return "Error something went wrong";
        }
        commentsRepository.deleteById(commentId);
        return "Post Deleted";
    }

}
