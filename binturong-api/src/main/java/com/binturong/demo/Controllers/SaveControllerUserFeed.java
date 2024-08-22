package com.binturong.demo.Controllers;


import com.binturong.demo.entities.Saves;
import com.binturong.demo.entities.User;
import com.binturong.demo.repositorys.PostRepository;
import com.binturong.demo.repositorys.UserRepository;
import com.binturong.demo.services.SavesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/userfeed")
@CrossOrigin
public class SaveControllerUserFeed {

    @Autowired
    private SavesService savesService;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/savepost")
    private String addPostSave(@RequestParam Integer postId, @RequestParam User user) {

        Saves newSave = new Saves();
        newSave.setPost(postRepository.findAllById(postId));
        savesService.saveSaves(newSave);
        return "post Saved";
    }

    @GetMapping
    private List<Saves> getUserSaves (@RequestParam User user) {
        return savesService.getAllSaves(user);

    }
}
