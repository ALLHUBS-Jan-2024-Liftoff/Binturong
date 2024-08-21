import React from "react"
export const IndividualPost = ({post,deletePost,viewComments}) => {
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
            <button onClick ={()=>viewComments(post.id)}>View Comments</button>
      </td>
      </tr>
)}


