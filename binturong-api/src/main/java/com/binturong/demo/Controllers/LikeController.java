package com.binturong.demo.Controllers;


import com.binturong.demo.repositorys.PostRepository;
import com.binturong.demo.repositorys.SavesRepository;
import com.binturong.demo.repositorys.UserRepository;
import com.binturong.demo.services.LikesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/userFeed")
@CrossOrigin
public class LikeController {

    @Autowired
    private LikesService likesService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private SavesRepository savesRepository;


    @PostMapping("/like")
    public String LikePost (@RequestParam Integer userId, @RequestParam Integer postId){



        return "";
    }
}
