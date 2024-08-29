// methods that will interact with the shares on the database

package com.binturong.demo.repositorys;

import com.binturong.demo.entities.Shares;
import com.binturong.demo.entities.Post;
import com.binturong.demo.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShareRepository extends JpaRepository<Shares, Integer> {

    Shares findByPostAndUser(Post post, User user);

}
