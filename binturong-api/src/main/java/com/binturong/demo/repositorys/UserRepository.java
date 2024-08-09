package com.binturong.demo.repositorys;

import com.binturong.demo.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User, Integer> {
    User findByUsername (String username);
}
