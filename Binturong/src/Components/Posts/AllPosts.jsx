// displays all posts with the options to delete, edit, add comments, view comments, like, and save

import { IndividualComment } from "../Comments/IndividualComment";
import { IndividualPost } from "./IndividualPost";
import React from 'react';


export const AllPosts = ({ posts, updatePost, deletePost, addComment, viewComments, likePost, savePost }) => {

  const handleSharePost = (postId) => {
    const postUrl = `${window.location.origin}/post/${postId}`;
        navigator.clipboard.writeText(postUrl).then(() => {
          alert(`Post URL copied to clipboard: ${postUrl}`);
        }).catch(err => {
          console.error('Failed to copy post URL: ', err);
        });
  };

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
                <IndividualPost
                    key={post.id}
                    post={post}
                    viewComments={viewComments}
                    deletePost={deletePost}
                    updatePost={updatePost}
                    addComment={addComment}
                    likePost={likePost}
                    savePost={savePost}
                    sharePost={handleSharePost}
                />
            ))}
        </tbody>
    </table>
  );
};