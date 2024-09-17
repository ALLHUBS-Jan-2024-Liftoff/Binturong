// displays an individual post with options to delete, view comments, save, like, and share

import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import "../../assets/css/userFeed.css";
import axios from "axios";


export const IndividualPost = ({ post, deletePost, viewComments, savePost,
                                addComment, updatePost, likePost, sharePost, currentUser }) => {
   if (!post || !post.id) {
           return null;
       }

    const [likes, setLikes] = useState(post.likes || 0);
    const [shares, setShares] = useState(post.shares || 0);
  

        const handleLike = async () => {
            try {
            const response = await axios.post(`http://localhost:8080/userfeed/${post.id}/like`);
            setLikes(response.data.likes);
            console.log("Post liked:", response.data);
            } catch (error) {
                console.error("Error liking post:", error);
            }
        };

        const handleShare = async () => {
            try {
                const response = await axios.post(`http://localhost:8080/userfeed/${post.id}/share`);
                setShares(response.data.shares);
                console.log("Post shared:", response.data);
                } catch (error) {
                    console.error("Error sharing post:", error);
                }
            };


  return (
      <div className="post-card">
          <div className="post-header">
                    <span className="post-title">{post.title}</span>
                    <span className="post-user">{post.user}</span>
                </div>
                <div className="post-content">
                    <p>{post.text}</p>
                    <p>GeoTag: {post.geoTag}</p>
                    {post.file && <img src={post.file} alt="Post attachment" />}
                </div>
                <div className="post-actions">
                    <button onClick={() => likePost(post.id)}>Like</button>
                    <button onClick={() => addComment(post.id)}>Comment</button>
                    <button onClick={() => viewComments(post.id)}>View Comments</button>
                    <button onClick={() => updatePost(post.id)}>Edit</button>
                    <button onClick={() => deletePost(post.id)}>Delete</button>
                    <button onClick={() => savePost(post.id)}>Save</button>
                    <button onClick={() => sharePost(post.id)}>Share</button>
                </div>
                <div className="post-stats">
                    <p>Likes: {likes}</p>
                    <p>Shares: {shares}</p>
                </div>
            </div>
  );
};

