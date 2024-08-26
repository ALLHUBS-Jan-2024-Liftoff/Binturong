import React from "react";
import {Dropdown} from "react-bootstrap";



export const IndividualPost = ({post,deletePost,updatePost,savePost, addComment,viewComments,likePost}) => {

  //User needs to be figured out

 return(
<tr key={post.id}>

      <td>  Id: {post.id} </td> 
      <td> User:</td>
      <td> Title: {post.title}  </td>
      <td>Text:{post.text}  </td>
      <td> Geotag:{post.geoTag}  </td>
      <td>Images:{post.file} </td>
      <td>

      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

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

      </td>
      </tr>
)}


