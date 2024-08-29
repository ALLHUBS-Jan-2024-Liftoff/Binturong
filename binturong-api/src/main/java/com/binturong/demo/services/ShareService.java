package com.binturong.demo.services;

import com.binturong.demo.entities.Shares;
import com.binturong.demo.entities.User;
import com.binturong.demo.entities.Post;

import java.util.List;

public interface ShareService {

    Shares saveShare(Shares share);
    void deleteShareByPostAndUser(Post post, User user);
    Shares findByPostAndUser(Post post, User user);

}
