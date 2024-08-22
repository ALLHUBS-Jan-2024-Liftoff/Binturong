

import { UpdatePostForm } from './UpdatePostForm';
import {useState} from 'react';
import { updatePostFetch } from '../Services/postService';

export const IndividualUserPost = ({post, deletePost}) => {

  const handleUpdatePost = (postId, title, text, geoTag, file) => {
    updatePostFetch(postId,title,text,geoTag,file)
    .then(() => {
        window.location.reload();
    })
}


  const [showUpdateForm, setShowUpdateForm] = useState(false);


    return(
   <tr key={post.id}>

  
   
         <td>  Id: {post.id} </td> 
         <td> Title: {post.title}  </td>
         <td>Text:{post.text}  </td>
         <td> Geotag:{post.geoTag}  </td>
         <td>File:{post.file} </td>
         <td>
         <button className ="btn btn-danger" onClick={() => deletePost(post.id)}>Delete Post</button>
          <button onClick={()=> setShowUpdateForm(!showUpdateForm)}>
                        {showUpdateForm ? "Close Post" : "Edit Post+"}
                    </button>
                    {showUpdateForm && <UpdatePostForm  updatePost={handleUpdatePost} />}
         </td>
         </tr>
   )}