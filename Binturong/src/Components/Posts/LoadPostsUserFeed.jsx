import React, {useState, useEffect} from "react";
import { addPost, GetAllPostsFetch, deletePost } from "../Services/postService";
import { SendLike } from "../Services/LikeService";
import { AllPosts } from "./AllPosts";
import { ViewComments } from "../Services/commentService";
import { AddPostForm } from "./AddPostForm";

export const LoadPostUserFeed = () => {
    const [showPostForm, setShowPostForm] = useState(false);
    const [posts, setPosts] = useState([]);
    const [comments,setComments] =useState([]);
    // const [user, setUser] = useState(null);
    // const userId=user.id;

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
        GetAllPostsFetch()
        .then(setPosts)
        .catch((error) => {
            console.error("ERROR: post fetching failed!", error);
        })
    },[]);

    const handleNewPost = (title,text,geoTag,file) => {
        addPost(userId,title,text,geoTag,file)
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
        .then(setComments)
    }
    const handleAddComment= (postId) => {
        const navigate = useNavigate();

    }

    const handleLikePost = (postId) => {
        SendLike(postId,userId)

    }
    const handleSavePost = (postId) => {
        AddSave(userId,postId);

    }

                return(
                    <div>
                        <button onClick={()=> setShowPostForm(!showPostForm)}>
                        {showPostForm ? "Close Post" : "Post+"}
                    </button>
                    {showPostForm && <AddPostForm  addPost={handleNewPost} />}
                    <AllPosts posts={posts} deletePost ={handleDeletePost} comments={comments} viewComments={handleViewComments} addComment={handleAddComment} likePost={handleLikePost} savePost={handleSavePost}/>

                        </div>
                )
    }