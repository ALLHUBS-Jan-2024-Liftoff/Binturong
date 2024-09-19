// displays an individual post with options to delete, view comments, save, like, and share

import React, { useState } from "react";
import "../../assets/css/userFeed.css";
import axios from "axios";
import ShareDialog from '../ShareDialog';



export const IndividualPost = ({ post, deletePost, viewComments, savePost,
                                addComment, updatePost, likePost, sharePost }) => {
   if (!post || !post.id) {
           return null;
       }

    const [likes, setLikes] = useState(post.likes || 0);
    const [isLiked, setIsLiked] = useState(false); //tracks the state of the post being liked
    const [showShareDialog, setShowShareDialog] = useState(false);
    const [postUrl, setPostUrl] = useState('');
    const userId = 1;  // update this later
    const currentUser = { id: userId };  // Mock current user object

// Previous handleLike function that didn't update.
//         const handleLike = async () => {
//                 try {
//                     // Update state immediately for live update
//                     setLikes(prevLikes => isLiked ? prevLikes - 1 : prevLikes + 1);
//                     setIsLiked(!isLiked);
//
//                     // Send API request to like/unlike the post
//                     const response = await axios.post(`http://localhost:8080/likes/like`);
//
//                     // Update state based on API response
//                     setLikes(response.data.likes);
//                     console.log("Post liked/unliked:", response.data);
//                 } catch (error) {
//                     console.error("Error liking/unliking post:", error);
//                 }
//             };

    // Updates like live
      const handleLike = async () => {
          try {
              // Send API request to like/unlike the post with currentUser information as query parameters
              const response = await axios.post(`http://localhost:8080/userFeed/${post.id}/like`, null, {
                  withCredentials: true
              });

              // Update state based on API response
              setLikes(prevLikes => prevLikes + 1); // Increment likes count
              console.log("Post liked:", response.data);
          } catch (error) {
              console.error("Error liking/unliking post:", error);
          }
      };



        const handleShare = async () => {
                try {
                    const url = `http://localhost:5173/post/${post.id}`;
                    await navigator.clipboard.writeText(url);
                    setPostUrl(url);
                    setShowShareDialog(true);
                    console.log("Post shared:", url);
                } catch (error) {
                    console.error("Error sharing post:", error);
                }
            };

            const closeDialog = () => {
                setShowShareDialog(false);
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
                    <button onClick={handleLike}>{buttonText}</button>
                    <button onClick={() => addComment(post.id)}>Comment</button>
                    <button onClick={() => viewComments(post.id)}>View Comments</button>
                    <button onClick={() => updatePost(post.id)}>Edit</button>
                    <button onClick={() => deletePost(post.id)}>Delete</button>
                    <button onClick={() => savePost(post.id)}>Save</button>
                    <button onClick={handleShare}>Share</button>
                </div>
                <div className="post-stats">
                    <p>Likes: {likes}</p>
                </div>
                {showShareDialog && <ShareDialog postUrl={postUrl} closeDialog={closeDialog} />}
            </div>
  );
};
