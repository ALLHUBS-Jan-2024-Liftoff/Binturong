import { SendLike } from '../Services/LikeService';
import {useEffect, useState} from 'react';
import postOptionsDropdown from './PostDropDownMenu';
import postDropDownMenu from './PostDropDownMenu';
import '../../src/assets/css/userFeed.css';

function LoadPost(){
    const [posts,setPosts] = useState([]);
    const [userId, setUserId] = useState(null);

// Gets Array ready for posts

    const fetchAllPosts = () =>{
        fetch("http://localhost:8080/userfeed/getAll")
            .then(res=>res.json())
            .then((result)=>{
                setPosts(result);
                });
    };

    // Fetches the userId along with the post to pair the like with the user
    const fetchUserId = () => {
        fetch("http://localhost:8080/user/getCurrentUserId")
            .then(res => res.json())
            .then((result) => {
                setUserId(result.userId);
            });
        };

    useEffect(()=>{
        //Calls from SQL and Backend for all posts by id
        fetchAllPosts();
        fetchUserId();
    },[]);

    // handles the like and takes the userId from the SQL database to pair like with the user that leaves the like
    const handleLike = (postId) => {
        if (userId) {
            SendLike(postId, userId)
                .then(response => {
                    console.log("Post liked successfully", response);
                    fetchAllPosts();
                })
                .catch(error => {
                    console.error("Error liking post", error);
                });
        } else {
            console.error("User ID not available");
        }
    };

    // handles the share - takes post URL and copies it to be shared on feed
    const handleShare = (postId) => {
        const postUrl = 'http://localhost:5173/post/${postId}';
        navigator.clipboard.writeText(postUrl)
            .then(() => {
                alert("Post URL copied to clipboard");
            })
            .catch(error => {
                console.error("Error copying URL", error);
            });
    };


// Maps out Posts needs Reworking for formating later but functional
    return(
        <>
            {posts.map(post=>(
                <tr key={post.id}>
                    <div id="postbox" >
                        <p> Id: {post.id} </p>
                        <p> Title: {post.title}  </p>
                        <p> Text:{post.text}  </p>
                        <p> Geotag:{post.geoTag}  </p>
                        <p> File:{post.file} </p>
                        <button onClick={() => handleLike(post.id)}>Like</button>
                        <button onClick={() => handleShare(post.id)}>Share</button>
                    </div>
                </tr>
            ))}
        </>
    );
}

export default LoadPost;