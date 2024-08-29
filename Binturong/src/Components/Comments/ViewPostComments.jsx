import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetPostFetch } from '../Services/postService';
import { deleteComment, ViewComments } from '../Services/commentService';
import { AllComments } from './AllComments';
import React from 'react';

export const ViewPostComments = () => {

        const [post, setPosts] = useState([]);
        const [comments, setComments] = useState([]);
        let postId =Number(location.search.replace("?",""));
        console.log(postId)
        console.log(comments)

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

 
            const handleDeleteComment = (commentId) => {
                deleteComment(commentId)
                    .then(() => {
                        setComments(comments.filter((comment) => comment.id !== commentId));
                    })
            
                    .catch((error) => {
                        console.error("ERROR HANDLEDELETEComment did not delete post", error);
                    })
        
            }

      

        return(
        <>
          <tr key={post.id}>

<td>  Id: {post.id} </td> 
<td> User:</td>
<td> Title: {post.title}  </td>
<td>Text:{post.text}  </td>
<td> Geotag:{post.geoTag}  </td>
<td>Images:{post.file} </td>
    </tr>
    <button onClick={()=> handleComment(postId)}>Comment</button>
             {comments.length === 0 ? <p>Be the first to comment!</p> : <AllComments comments={comments} deleteComment={handleDeleteComment}/>}
            
    
             </>
        )

    }
