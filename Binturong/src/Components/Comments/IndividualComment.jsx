import React from "react"

export const IndividualComment = ({comment,deleteComment,updateComment}) => {
 return(
<tr key={comment.id}>

      <td>  Id: {comment.id} </td> 
      <td>Text:{comment.text}  </td>
      <td>File:{comment.file} </td>
      <td>
        <button className="btn btn-danger " onClick={()=> deleteComment(comment.id)}>Delete Comment</button>
        <button className="btn" onClick={()=> updateComment(comment.id)}>Update Comment</button>
      </td>
      </tr>
)}


