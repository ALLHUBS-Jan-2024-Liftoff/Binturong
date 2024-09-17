// fetches user's posts on their profile and displays them

import React, { useState, useEffect } from "react";
import { addPost, GetUserPostsFetch, deletePost } from "../Services/postService";
import { SendLike } from "../Services/LikeService";
import { AllPosts } from "./AllPosts";
import { AddPostForm } from "./AddPostForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const LoadUserPostUserProfile = () => {
  const [showPostForm, setShowPostForm] = useState(false);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/user/profile", {
          withCredentials: true,
        });
        if (response.status === 200) {
          setUser(response.data.user);
          setPosts(response.data.posts);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleNewPost = (title, text, geoTag, file) => {
    addPost(user.id, title, text, geoTag, file)
      .then((newPost) => {
        setPosts([...posts, newPost]);
      })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("ERROR HANDLENEWPOST didn't create new post", error);
      });
  };

  const handleUpdatePost = (postId) => {
    navigate(`/updatePost/?${postId}`, { replace: true });
  };

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
      });
  };

  const handleAddComment = (postId) => {
    navigate(`/newcomment/?${postId}`, { replace: true });
  };

  const handleViewComments = (postId) => {
    navigate(`/comments/?${postId}`, { replace: true });
  };

  const handleLikePost = (postId) => {
    SendLike(postId, user.id);
  };

  const handleSharePost = (postId) => {
    const postUrl = `http://localhost:5173/post/${postId}`;
    navigator.clipboard.writeText(postUrl)
      .then(() => {
        alert("Post URL copied to clipboard");
      })
      .catch((error) => {
        console.error("Error copying URL", error);
      });
  };

  const handleSavePost = (postId) => {
    AddSave(user.id, postId);
  };

  return (
    <div className="test">
      <button onClick={() => setShowPostForm(!showPostForm)}>
        {showPostForm ? "Close Post" : "Post+"}
      </button>
      {showPostForm && <AddPostForm addPost={handleNewPost} />}
      <AllPosts
        posts={posts}
        deletePost={handleDeletePost}
        updatePost={handleUpdatePost}
        addComment={handleAddComment}
        viewComments={handleViewComments}
        likePost={handleLikePost}
        sharePost={handleSharePost}
        savePost={handleSavePost}
        currentUser={user}
      />
    </div>
  );
};
