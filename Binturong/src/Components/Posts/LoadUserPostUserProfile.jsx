import React, {useState, useEffect} from "react";
import { addPost, deletePost, GetUserPostsFetch, updatePostFetch } from "../Services/postService";
import { AddPostForm } from "./AddPostForm";
import { UserPosts } from "./UserPosts";
import { ViewComments } from "../Services/commentService";


export const LoadUserPostUserProfile = () => {
    const [showPostForm, setShowPostForm] = useState(false);
    const [posts, setPosts] = useState([]);
    // const [user, setUser] = useState(null);
    const userId = 53;
   

    useEffect(() => {
        // const storedUser = localStorage.getItem("user");
        // console.log("Stored User:", storedUser);
        // if (storedUser) {
        //     try {
        //         const parsedUser = JSON.parse(storedUser);
        //         console.log("Parsed User:", parsedUser);
        //         setUser(parsedUser);
        //     } catch (error) {
        //         console.error("Eror parsing user from local storage:", error);
        //     }
        // }
        //fetch all posts when component mounts
        
        GetUserPostsFetch(userId)
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
    const handleViewComments= (postId) => {
        ViewComments(postId)
    }

    
                return(
                    <div>
                        <button onClick={()=> setShowPostForm(!showPostForm)}>
                        {showPostForm ? "Close Post" : "Post+"}
                    </button>
                    {showPostForm && <AddPostForm  addPost={handleNewPost} />}
                    <UserPosts posts={posts} deletePost ={handleDeletePost} viewComments={handleViewComments}/>

                    
                        </div>
                )
    }