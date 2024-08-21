import React from "react"

export const IndividualComment = ({comment,deleteComment}) => {
 return(
<tr key={comment.id}>

      <td>  Id: {comment.id} </td> 
      <td> Title: {comment.title}  </td>
      <td>Text:{comment.text}  </td>
      <td> Geotag:{comment.geoTag}  </td>
      <td>File:{comment.file} </td>
      <td>
        <button className="btn btn-danger " onclick={deleteComment(comment.id)}>Delete Comment</button>
      </td>
      </tr>
)}


