import React from "react"

export const IndividualComment = ({comment,deleteComment}) => {
 return(
<tr key={comment.id}>

      <td>  Id: {comment.id} </td> 
      <td>Text:{comment.commentText}  </td>
      <td>File:{comment.file} </td>
      <td>
        <button className="btn btn-danger " onClick={()=> deleteComment(comment.id)}>Delete Comment</button>
      </td>
      </tr>
)}


