package com.binturong.demo.repositorys;

import com.binturong.demo.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository <User,Integer> {

    User findByUsername(String username);
}
