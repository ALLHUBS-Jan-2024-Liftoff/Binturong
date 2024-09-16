import {useEffect, useState} from 'react';
import DeletePost from './DeletePost';
import UpdatePostForm from './UpdatePost';
import '../../src/assets/css/userFeed.css';

function LoadUserPosts(e) {

   // Gets Array ready for posts
const [posts,setPosts] = useState([]);


const fetchAllUserPosts = () => {
 //Calls from SQL and Backend for all posts by id
 fetch("http://localhost:8080/userprofile/getAllUsersPosts")
 .then(res=>res.json())
 .then((result)=>{
     setPosts(result);
 }
 )
}

    useEffect(()=>{
        fetchAllUserPosts();
    },[]);

    function HandleDeletePost() {
        console.log("hi");

    }




// Maps out Posts needs Reworking for formating later but functional
    return(
        <>
            {posts.map(post=>(
                <tr key={post.id}>
                    <div id="postbox" >
                        <th> Id: {post.id} </th>
                        <p> Title: {post.title}  </p>
                        <p> Text:{post.text}  </p>
                        <p> Geotag:{post.geoTag}  </p>
                        <p> File:{post.file} </p>
                        <div className="dropdown">
                            <button className="dropbtn">...</button>
                            <div className="dropdown-content">
                                <div>
                                    <form id= "post-update-form">
                                        <button onClick={()=> UpdatePostForm(post.id)}>Edit Post</button>
                                    </form>
                                </div>
                                <div>
                                    <form id ="delete-form">
                                        <button id="deletepostbutton" onClick={()=>HandleDeletePost()}>Delete Post</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </tr>
            ))}
        </>
    )
}

export default LoadUserPosts;