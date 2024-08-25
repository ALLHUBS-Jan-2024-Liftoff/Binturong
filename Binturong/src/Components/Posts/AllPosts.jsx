
import { IndividualComment } from "../Comments/IndividualComment";
import { IndividualPost } from "./IndividualPost";
import React from 'react';


export const AllPosts = ({ posts, viewComments, deletePost,addComment,likePost,savePost }) => {
  return (

    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">User</th>
          <th scope="col">Title</th>
          <th scope="col">Text</th>
          <th scope="col">GeoTag</th>
          <th scope="col">File</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <>
            <IndividualPost key={post.id} post={post} viewComments={viewComments} deletePost={deletePost} addComment={addComment} likePost={likePost} savePost={savePost} />
        
          
</>
        ))}
      </tbody>
    </table>





  );

};