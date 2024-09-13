// displays an individual post by a user with options to delete, edit, view comments, like, and share

import { UpdatePostForm } from './UpdatePostForm';
import React, { useState } from 'react';
import { updatePostFetch } from '../Services/postService';
import axios from "axios";

export const IndividualUserPost = ({ post, deletePost, viewComments, currentUser }) => {
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [likes, setLikes] = useState(post.likes);
    const [shares, setShares] = useState(post.shares);

    const handleUpdatePost = (postId, title, text, geoTag, file) => {
        updatePostFetch(postId,title,text,geoTag,file)
            .then(() => {
                window.location.reload();
            });
    };

    // Handles liking a post - POST request to like and then add +1 like to the post
    const handleLike = async () => {
        try {
          const response = await axios.post(`http://localhost:8080/userfeed/${post.id}/like`);
          setLikes(response.data.likes);
          console.log("Post liked:", response.data);
        } catch (error) {
          console.error("Error liking post:", error);
        }
    };

      // Handles sharing a post - POST request for shares and adds a +1 to shares on post - need to add to feed still
    const handleShare = async () => {
        try {
          const response = await axios.post(`http://localhost:8080/userfeed/${post.id}/share`);
          setShares(response.data.shares);
          console.log("Post shared:", response.data);
        } catch (error) {
          console.error("Error sharing post:", error);
        }
    };

    return(
        <tr key={post.id}>
            <td>  Id: {post.id} </td>
            <td> Title: {post.title}  </td>
            <td>Text:{post.text}  </td>
            <td> Geotag:{post.geoTag}  </td>
            <td>File:{post.file} </td>
            <td>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => deletePost(post.id)}>Delete Post</Dropdown.Item>
                        <Dropdown.Item onClick={() => setShowUpdateForm(!showUpdateForm)}>
                            {showUpdateForm ? "Close Post" : "Edit Post+"}
                        </Dropdown.Item>
                            {showUpdateForm && <UpdatePostForm updatePost={handleUpdatePost} />}
                        <Dropdown.Item onClick={() => viewComments(post.id)}>View Comments</Dropdown.Item>
                        <Dropdown.Item onClick={handleShare}>Share Post</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </td>

            <td>
                {post.userId !== currentUser.id && (
                    <button onClick={handleLike}>Like</button>
                )}
                <p>Likes: {likes}</p>
                <p>Shares: {shares}</p>
            </td>
        </tr>
    );
};