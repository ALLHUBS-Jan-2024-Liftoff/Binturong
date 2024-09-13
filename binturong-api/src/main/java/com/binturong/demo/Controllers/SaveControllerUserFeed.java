package com.binturong.demo.Controllers;

import com.binturong.demo.entities.Post;
import com.binturong.demo.entities.Saves;
import com.binturong.demo.entities.User;
import com.binturong.demo.repositorys.PostRepository;
import com.binturong.demo.repositorys.SavesRepository;
import com.binturong.demo.repositorys.UserRepository;
import com.binturong.demo.services.SavesService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usersavedfeed")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class SaveControllerUserFeed {

    @Autowired
    private SavesService savesService;

    @Autowired
    private SavesRepository savesRepository;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    private static final String userSessionKey = "user";

    private User getUserFromSession(HttpSession session) {
        Integer userId = (Integer) session.getAttribute(userSessionKey);
        if (userId == null) {
            return null;
        }

        User user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            throw new EntityNotFoundException("User not found");
        }
        return user;
    }


    @PostMapping("/savepost")
    private String addPostSave(@RequestParam Integer postId, HttpServletRequest request) {
        HttpSession session = request.getSession();
        User user = getUserFromSession(session);
        if (user == null) {
            throw new EntityNotFoundException("User not found");
        }
        Post post = postRepository.findById(postId).orElse(null);
        if (post == null) {
            throw new EntityNotFoundException("Post not found");
        }

        Saves newSave = new Saves();
        newSave.setUser(user);
        newSave.setPost(post);
        savesService.saveSaves(newSave);
        return "Post saved";
    }

    @GetMapping("/getsavedposts")
    private List<Post> getUserSaves(HttpServletRequest request) {
        HttpSession session = request.getSession();
        User user = getUserFromSession(session);
        if (user == null) {
            throw new EntityNotFoundException("User not found");
        }
        return savesRepository.findSavedPostsByUserId(user.getId());
    }
}
