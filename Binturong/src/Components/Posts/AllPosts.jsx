// displays all posts with the options to delete, edit, add comments, view comments, like, and save

import { IndividualComment } from "../Comments/IndividualComment";
import { IndividualPost } from "./IndividualPost";
import "../../assets/css/userFeed.css";
import React from 'react';


export const AllPosts = ({ posts, updatePost, deletePost, addComment,
                            viewComments, likePost, savePost, refreshPosts }) => {

  const handleSharePost = (postId) => {
    const postUrl = `${window.location.origin}/post/${postId}`;
        navigator.clipboard.writeText(postUrl).then(() => {
          alert(`Post URL copied to clipboard: ${postUrl}`);
        }).catch(err => {
          console.error('Failed to copy post URL: ', err);
        });
  };

  return (
      <div className="posts-container">
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
            refreshPosts={refreshPosts}
          />
        ))}
      </div>
  );
};