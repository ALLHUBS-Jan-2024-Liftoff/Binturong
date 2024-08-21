import React, {useState, useEffect} from "react";
import { addPost, GetAllPostsFetch } from "../Services/postService";
import { AllPosts } from "./AllPosts";
import { ViewComments } from "../Services/commentService";

import { AddPostForm } from "./AddPostForm";

export const LoadPostUserFeed = () => {
    const [showPostForm, setShowPostForm] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        //fetch all posts when component mounts
        GetAllPostsFetch()
        
        .then(setPosts)
        .catch((error) => {
            console.error("ERROR: post fetching failed!", error);
        })
    },[]);

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

    const handleViewComments= (postId) => {
        ViewComments(postId)
    }
                return(
                    <div>
                        <button onClick={()=> setShowPostForm(!showPostForm)}>
                        {showPostForm ? "Close Post" : "Post+"}
                    </button>
                    {showPostForm && <AddPostForm  addPost={handleNewPost} />}
                    <AllPosts posts={posts} viewComments={handleViewComments}/>
                        </div>
                )
    }