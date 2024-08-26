import React, { useState } from "react";
import {Dropdown} from "react-bootstrap";
import axios from "axios";


export const IndividualPost = async ({ post,deletePost,viewComments,savePost, updatePost,addComment,likePost }) => {
    const [likes, setLikes] = useState(post.likes);
    const [shares, setShares] = useState(post.shares);
  
   try {
            const response = await axios.post(`http://localhost:8080/userfeed/${post.id}/like`);
            setLikes(response.data.likes);
            console.log("Post liked:", response.data);
            } catch (error) {
                console.error("Error liking post:", error);
            }
        };

//export const IndividualPost = ({post,deletePost,updatePost,savePost, addComment,viewComments,likePost}) => {

  //User needs to be figured out

    const handleLike = async () => {

         <tr>
                  <td>  Id: {post.id} </td>
                  <td> User: {post.id}</td>
                   <td> Title: {post.title}  </td>
                  <td>Text:{post.text}  </td>
                  <td> Geotag:{post.geoTag}  </td>
                  <td>Images:{post.file} </td>

          </tr>



    const handleShare = async () => {
    <Dropdown>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => deletePost(post.id)}>Delete Post</Dropdown.Item>
        <Dropdown.Item onClick={()=> updatePost(post.id)}>Update Post</Dropdown.Item>
        <Dropdown.Item onClick ={() =>savePost(post.id)}>Save Post</Dropdown.Item>
        <Dropdown.Item onClick ={()=> likePost(post.id)}>Like Post</Dropdown.Item>
        <Dropdown.Item onClick ={()=>viewComments(post.id)}>View Comments</Dropdown.Item>
        <Dropdown.Item onClick = {() => addComment(post.id)}>Post Comment</Dropdown.Item>
        <Dropdown.Item onClick ="" > Close x</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        try {
            const response = await axios.post(`http://localhost:8080/userfeed/${post.id}/share`);
            setShares(response.data.shares);
            console.log("Post shared:", response.data);
            } catch (error) {
                console.error("Error sharing post:", error);
            }
        };



    return (
        <tr key={post.id}>

            <td> Id: {post.id} </td>
            <td> Title: {post.title}  </td>
            <td> Text:  {post.text}  </td>
            <td> Geotag: {post.geoTag}  </td>
            <td> File: {post.file} </td>
            <td>

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                            <Dropdown.Item onClick ={() => deletePost(post.id)}>Delete Post</Dropdown.Item>
                            <Dropdown.Item onClick ={() => viewComments(post.id)}>View Comments</Dropdown.Item>
                            <Dropdown.Item onClick ={() => savePost(post.id)}>Save Post</Dropdown.Item>
                            <Dropdown.Item onClick={() => {}}>Close x</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
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

