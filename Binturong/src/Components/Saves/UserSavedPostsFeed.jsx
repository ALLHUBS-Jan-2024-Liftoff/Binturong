import { useEffect ,useState} from "react";
import { LoadSaves } from "./LoadSaves";
import { GetUserSaves } from "../Services/savesService";
import React from "react";
import { IndividualPost } from "../Posts/IndividualPost";

export const UserSavedPostsFeed = () => {
    const [posts, setPosts] = useState([]);
    const userId = 53;


    useEffect(() => {
        //fetch all posts when component mounts
        GetUserSaves(userId)
        
        .then(setPosts)
        .catch((error) => {
            console.error("ERROR: post fetching failed!", error);
        });
    },[user]);

    return (
        <div>
          {posts.map((post) => (
            <IndividualPost
              key={post.id}
              post={post}
              deletePost={() => {}}
              viewComments={() => {}}
              savePost={() => {}}
            />
          ))}
          <LoadSaves posts={posts} />
        </div>
      );
    };