// fetches user's posts on their profile and displays them

import React, {useState, useEffect} from "react";
import { addPost, GetAllPostsFetch, deletePost } from "../Services/postService";
import { SendLike } from "../Services/LikeService";
import { AllPosts } from "./AllPosts";
import { AddPostForm } from "./AddPostForm";
import { useNavigate } from "react-router-dom";

export const LoadUserPostUserProfile = () => {

    const [showPostForm, setShowPostForm] = useState(false);
    const [posts, setPosts] = useState([]);
    const userId = 53;  // update this later
    const currentUser = { id: userId };  // Mock current user object
    console.log(posts)

    const Navigate = useNavigate();

    useEffect(() => {
            GetAllPostsFetch()
                .then(setPosts)
                .catch((error) => {
                    console.error("ERROR: post fetching failed!", error);
                });
            }, []);

    const handleNewPost = (title,text,geoTag,file) => {
        addPost(title,text,geoTag,file)
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

    }

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


    return(
        <div class="test">
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