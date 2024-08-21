import React from "react"
export const IndividualPost = ({post}) => {
 return(
<tr key={post.id}>

      <td>  Id: {post.id} </td> 
      <td> Title: {post.title}  </td>
      <td>Text:{post.text}  </td>
      <td> Geotag:{post.geoTag}  </td>
      <td>File:{post.file} </td>
      <td>
      </td>
      </tr>
)}


