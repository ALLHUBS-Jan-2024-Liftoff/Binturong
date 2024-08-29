// fetches user's saved posts and displays then

import { useEffect ,useState} from "react";
import { LoadSaves } from "./LoadSaves";
import { GetUserSaves } from "../Services/savesService";
import React from "react";
import { IndividualPost } from "../Posts/IndividualPost";
import { SendLike } from "../Services/LikeService";

export const UserSavedPostsFeed = () => {
    const [posts, setPosts] = useState([]);
    const user = "";


    useEffect(() => {
        //fetch all posts when component mounts
        GetUserSaves(user)
        
        .then(setPosts)
        .catch((error) => {
            console.error("ERROR: post fetching failed!", error);
        });
    },[user]);

    const handleLike = (postId) => {
        SendLike(postId, user)
            .then(response => {
                console.log("post liked!", response);
            })
            .catch(error => {
                console.error("ERROR - Not Liked", error);
            });
        };


    const handleShare = (postId) => {
        const postUrl = 'http://localhost:5173/post/${postId}';
        navigator.clipboard.writeText(postUrl)
            .then(() => {
                alert("Post URL copied~!");
            })
            .catch(error => {
                console.error("Error! Didn't copy URL", error);
            });
    };

    return (
        <div>
          {posts.map((post) => (
            <IndividualPost
              key={post.id}
              post={post}
              deletePost={() => {}}
              viewComments={() => {}}
              savePost={() => {}}
              handleLike={() => handleLike(post.id)}
              handleShare={() => handleShare(post.id)}
            />
          ))}
          <LoadSaves posts={posts} />
        </div>
      );
    };