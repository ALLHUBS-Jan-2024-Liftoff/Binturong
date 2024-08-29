package com.binturong.demo.services;

import com.binturong.demo.entities.Shares;
import com.binturong.demo.entities.User;
import com.binturong.demo.entities.Post;
import com.binturong.demo.repositorys.ShareRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ShareServiceImpl implements ShareService {

    @Autowired
    private ShareRepository shareRepository;

    @Override
    public Shares saveShare(Shares share) {
        return shareRepository.save(share);
    }

    @Override
    public void deleteShareByPostAndUser(Post post, User user) {
        Shares share = shareRepository.findByPostAndUser(post, user);
        if (share != null) {
            shareRepository.delete(share);
        }
    }

    @Override
    public Shares findByPostAndUser(Post post, User user) {
        return shareRepository.findByPostAndUser(post, user);
    }

}
