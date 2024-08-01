package com.binturong.demo.Controller;

import com.binturong.demo.Model.Post;
import com.binturong.demo.Service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/userfeed")
public class PostController {

    @Autowired
    private PostService postService;

    @PostMapping("/post")
    public String post(@RequestBody Post post){
        postService.savePost(post);
        return "Posted";
    }

}
