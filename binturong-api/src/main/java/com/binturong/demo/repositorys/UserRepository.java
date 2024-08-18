package com.binturong.demo.repositorys;

import com.binturong.demo.entities.User;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {

    User findByUsername(String username);

}


//@Repository
//public interface UserRepository extends JpaRepository <User,Integer> {
//
//    User findByUsername(String username);
//
//}
