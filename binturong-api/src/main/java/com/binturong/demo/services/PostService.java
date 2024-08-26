package com.binturong.demo.services;

import com.binturong.demo.entities.Post;
import com.binturong.demo.entities.User;

import java.util.List;
import java.util.Optional;


public interface PostService {

    public Post savePost(Post post);

    public List<Post> getAllPosts();

    public List<Post> getAllUserPosts(User user);

    public Post getPost (Integer postId);







}


