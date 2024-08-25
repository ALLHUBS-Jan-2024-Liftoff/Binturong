import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetPostFetch } from '../Services/postService';
import { ViewComments } from '../Services/commentService';
import { AllComments } from './AllComments';
import React from 'react';

export const ViewPostComments = () => {

        const [post, setPosts] = useState([]);
        const [comments, setComments] = useState([]);
        let postId =Number(location.search.replace("?",""));
        console.log(postId)

        const Navigate = useNavigate();

        const load = () => {
            ViewComments(postId)
            .then(setComments);
            GetPostFetch(postId)
            .then(setPosts)
            
            .catch((error) => {
                console.error("ERROR: post fetching failed!", error);
            })
        }

        useEffect(() => {
        load()
        },[]);

        const handleComment = (postId) => {
            Navigate(`/newcomment/?${postId}`,{replace:true});
        }

        const handleDelete = () => {
            
        }

        return(
            <div>
          <tr key={post.id}>

<td>  Id: {post.id} </td> 
<td> User:</td>
<td> Title: {post.title}  </td>
<td>Text:{post.text}  </td>
<td> Geotag:{post.geoTag}  </td>
<td>Images:{post.file} </td>
    </tr>
    <button onClick={handleComment}>Comment</button>
             <AllComments comments={comments} deleteComment={handleDelete}/>
    
                </div>
        )

    }
