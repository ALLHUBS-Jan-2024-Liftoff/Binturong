package com.binturong.demo.repositorys;

import com.binturong.demo.entities.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository {

    User findByUsername(String username);
}
