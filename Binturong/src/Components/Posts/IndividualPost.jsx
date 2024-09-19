// displays an individual post with options to delete, view comments, save, like, and share

import React, { useState } from "react";
import "../../assets/css/userFeed.css";
import axios from "axios";


export const IndividualPost = ({ post, deletePost, viewComments, savePost,
                                addComment, updatePost, likePost, sharePost }) => {
   if (!post || !post.id) {
           return null;
       }

    const [likes, setLikes] = useState(post.likes || 0);
    const [isLiked, setIsLiked] = useState(false); //tracks the state of the post being liked

// Previous handleLike function that didn't update.
        const handleLike = async () => {
                try {
                    // Update state immediately for live update
                    setLikes(prevLikes => isLiked ? prevLikes - 1 : prevLikes + 1);
                    setIsLiked(!isLiked);

                    // Send API request to like/unlike the post
                    const response = await axios.post(`http://localhost:8080/likes/like`);

                    // Update state based on API response
                    setLikes(response.data.likes);
                    console.log("Post liked/unliked:", response.data);
                } catch (error) {
                    console.error("Error liking/unliking post:", error);
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

    const buttonText = isLiked ? 'Unlike' : 'Like';

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
{/*                     Original Like Button */}
                    <button onClick={() => likePost(post.id)}>Like</button>
{/*                     <button onClick={handleLike}>{buttonText}</button> */}
                    <button onClick={() => addComment(post.id)}>Comment</button>
                    <button onClick={() => viewComments(post.id)}>View Comments</button>
                    <button onClick={() => updatePost(post.id)}>Edit</button>
                    <button onClick={() => deletePost(post.id)}>Delete</button>
                    <button onClick={() => savePost(post.id)}>Save</button>
                    <button onClick={() => sharePost(post.id)}>Share</button>
                </div>
                <div className="post-stats">
                    <p>Likes: {likes}</p>
                </div>
            </div>
  );
};
