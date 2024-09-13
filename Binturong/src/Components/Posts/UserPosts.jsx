// displays the user's posts with the options to delete or edit the post

import React from "react";
import { AllComments } from "../Comments/AllComments";
import { IndividualComment } from "../Comments/IndividualComment";
import { IndividualUserPost } from "./IndividualUserPost";

export const UserPosts= ({ posts, deletePost, updatePost, viewComments} ) => {

    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Text</th>
                    <th scope="col">GeoTag</th>
                    <th scope="col">File</th>
                </tr>
            </thead>
            <tbody>
                {posts.map((post) => (
                    <div key={post.id}>
                        <IndividualUserPost
                            post={post}
                            deletePost={deletePost}
                            updatePost={updatePost}
                            viewComments={viewComments}
                            handleLike={() => handleLike(post.id)}
                            handleShare={() => handleShare(post.id)}
                        />
                    </div>
                ))}
            </tbody>
        </table>
    );
};