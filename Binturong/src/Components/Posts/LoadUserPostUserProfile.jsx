// fetches user's posts on their profile and displays them

import React, {useState, useEffect} from "react";
import { addPost, GetUserPostsFetch, deletePost, getToken } from "../Services/postService";
import { SendLike } from "../Services/LikeService";
import { AllPosts } from "./AllPosts";
import { AddPostForm } from "./AddPostForm";
import { useNavigate } from "react-router-dom";

export const LoadUserPostUserProfile = () => {

    const [showPostForm, setShowPostForm] = useState(false);
    const [posts, setPosts] = useState([]);
    const [userId, setUserId] = useState(null);
    const currentUser = { id: userId };

    const Navigate = useNavigate();

    useEffect(() => {
            const storedUser = localStorage.getItem("user");
            if (storedUser && storedUser !== "undefined") {
                try {
                    const parsedUser = JSON.parse(storedUser);
                    setUserId(parsedUser.id);
                } catch (error) {
                    console.error("Error parsing user from local storage:", error);
                }
            }
        }, []);

    useEffect(() => {
        if (userId) {
            GetUserPostsFetch(userId)
                .then(setPosts)
                .catch((error) => {
                    console.error("ERROR: post fetching failed!", error);
                });
            }
        }, [userId]);

    const handleNewPost = (title,text,geoTag,file) => {
        addPost(userId, title,text,geoTag,file)
        .then((newPost) => {
            setPosts([...posts, newPost]);
        })
        .then(()=>{
            window.location.reload();
        })
        .catch((error) =>{
            console.error("ERROR HANDLENEWPOST didnt create new post", error);
        });

    };

    const handleUpdatePost = (postId) =>{
        Navigate(`/updatePost/?${postId}`,{replace:true});

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

    const handleAddComment= (postId) => {
        Navigate(`/newcomment/?${postId}`,{replace:true});

    };

    const handleViewComments = (postId) => {
        Navigate(`/comments/?${postId}`, {replace:true});
    };

    const handleLikePost = (postId) => {
        SendLike(postId,userId);

    };

    const handleSharePost = (postId) => { // Added handleSharePost function
            const postUrl = `http://localhost:5173/post/${postId}`;
            navigator.clipboard.writeText(postUrl)
                .then(() => {
                    alert("Post URL copied to clipboard");
                })
                .catch(error => {
                    console.error("Error copying URL", error);
                });
        };

    const handleSavePost = (postId) => {
        AddSave(userId,postId);

    };


    return(
        <div className="test">
            <button onClick={()=> setShowPostForm(!showPostForm)}>
                {showPostForm ? "Close Post" : "Post+"}
            </button>
                {showPostForm && <AddPostForm  addPost={handleNewPost} />}
            <AllPosts
                posts={posts}
                deletePost={handleDeletePost}
                updatePost={handleUpdatePost}
                addComment={handleAddComment}
                viewComments={handleViewComments}
                likePost={handleLikePost}
                sharePost={handleSharePost}
                savePost={handleSavePost}
                currentUser={currentUser}
            />
        </div>
    );
};