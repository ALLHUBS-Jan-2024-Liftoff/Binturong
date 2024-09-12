// fetches user's saved posts and displays then

import { useEffect ,useState} from "react";
import { LoadSaves } from "./LoadSaves";
import { GetUserSaves } from "../Services/savesService";
import React from "react";
import { IndividualPost } from "../Posts/IndividualPost";
import { AllPosts } from "../Posts/AllPosts"
import { SendLike } from "../Services/LikeService";

export const UserSavedPostsFeed = () => {
    const [posts, setPosts] = useState([]);
    const userId = 53;
    console.log(posts)


    useEffect(() => {
        //fetch all posts when component mounts
        GetUserSaves(userId)
        
        .then(setPosts)
        .catch((error) => {
            console.error("ERROR: post fetching failed!", error);
        });
    },[]);
    const handleDeletePost = (postId) => {
      deletePost(postId)
          .then(() => {
              setPosts(posts.filter((post) => post.id !== postId));
          })
          .then(() => {
              window.location.reload();
          })
          .catch((error) => {
              console.error("ERROR HANDLEDELETEPOST did not delete post", error);
          })

  }
  const handleAddComment= (postId) => {
      Navigate(`/newcomment/?${postId}`,{replace:true});

  }
  const handleViewComments = (postId) => {
      Navigate(`/comments/?${postId}`, {replace:true});
  }

  const handleLikePost = (postId) => {
      SendLike(postId,userId)

  }
  const handleSavePost = (postId) => {
      AddSave(userId,postId);

  }
  const handleUpdatePost = (postId) =>{
    Navigate(`/updatePost/?${postId}`,{replace:true});

}

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
        <AllPosts posts={posts}
        deletePost ={handleDeletePost}
        updatePost ={handleUpdatePost}
        addComment={handleAddComment}
        viewComments={handleViewComments}
         likePost={handleLikePost}
         savePost={handleSavePost}/>
      );
    };