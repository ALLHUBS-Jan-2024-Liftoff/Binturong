package com.binturong.demo.services;

import com.binturong.demo.entities.Comments;
import com.binturong.demo.entities.User;

import java.util.List;

public interface CommentService {

    public Comments saveComments(Comments comment);

    public List<Comments> getPostComments(User user);
}
