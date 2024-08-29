// displays saved posts in a table format

import React from "react";
import { IndividualPost } from "../Posts/IndividualPost";

export const LoadSaves = ({posts, viewComments, comments }) => {
    return (

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
              <div>
                <IndividualPost key={post.id} post={post} viewComments={viewComments} />
                <div>
                  {comments.map((comment) => (
                    <IndividualComment key={comment.id} comment={comment} />
                  ))}
                </div>
              </div>
            ))}
          </tbody>
        </table>
      );
};