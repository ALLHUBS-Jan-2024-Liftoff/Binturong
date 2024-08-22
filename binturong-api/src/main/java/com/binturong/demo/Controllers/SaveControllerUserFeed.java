package com.binturong.demo.Controllers;


import com.binturong.demo.entities.Post;
import com.binturong.demo.entities.Saves;
import com.binturong.demo.entities.User;
import com.binturong.demo.repositorys.PostRepository;
import com.binturong.demo.repositorys.UserRepository;
import com.binturong.demo.services.SavesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/userFeed")
@CrossOrigin
public class SaveControllerUserFeed {

    @Autowired
    private SavesService savesService;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/savepost")
    private String addPostSave(@RequestParam Integer postId, @RequestParam Integer userId) {

        Saves newSave = new Saves();
        newSave.setUser(userRepository.findById(userId).get());
        newSave.setPost(postRepository.findAllById(postId));
        savesService.saveSaves(newSave);
        return "post Saved";
    }

    @GetMapping
    private List<Saves> getUserSaves (@RequestParam Integer userid) {
        return savesService.getAllSaves(userRepository.findById(userid).get());

    }


}
