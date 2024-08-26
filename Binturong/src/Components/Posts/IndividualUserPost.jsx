import { UpdatePostForm } from './UpdatePostForm';
import {useState} from 'react';
import { updatePostFetch } from '../Services/postService';
import axios from "axios";


export const IndividualUserPost = ({ post, deletePost,viewComments }) => {
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [likes, setLikes] = useState(post.likes);
    const [shares, setShares] = useState(post.shares);

  const handleUpdatePost = (postId, title, text, geoTag, file) => {
    updatePostFetch(postId,title,text,geoTag,file)
    .then(() => {
        window.location.reload();
    })
}

    const handleLike = async () => {
        try {
          const response = await axios.post(`http://localhost:8080/userfeed/${post.id}/like`);
          setLikes(response.data.likes);
          console.log("Post liked:", response.data);
        } catch (error) {
          console.error("Error liking post:", error);
        }
      };

      const handleShare = async () => {
        try {
          const response = await axios.post(`http://localhost:8080/userfeed/${post.id}/share`);
          setShares(response.data.shares);
          console.log("Post shared:", response.data);
        } catch (error) {
          console.error("Error sharing post:", error);
        }
      };

    return(
   <tr key={post.id}>

  
   
         <td>  Id: {post.id} </td> 
         <td> Title: {post.title}  </td>
         <td>Text:{post.text}  </td>
         <td> Geotag:{post.geoTag}  </td>
         <td>File:{post.file} </td>
         <td>
         <button className ="btn btn-danger" onClick={() => deletePost(post.id)}>Delete Post</button>

        </td>
        <td>

          <button onClick={()=> setShowUpdateForm(!showUpdateForm)}>
                        {showUpdateForm ? "Close Post" : "Edit Post+"}
                    </button>
                    {showUpdateForm && <UpdatePostForm  updatePost={handleUpdatePost} />}
         </td>

         <td>
         <button onClick ={()=>viewComments(post.id)}>View Comments</button>
         </td>

         <td>
             <button onClick={handleLike}>Like</button>
             <button onClick={handleShare}>Share</button>
             <p>Likes: {likes}</p>
             <p>Shares: {shares}</p>
         </td>

         </tr>
  );
};