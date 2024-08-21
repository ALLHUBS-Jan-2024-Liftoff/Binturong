import { IndividualComment } from "../Comments/IndividualComment";
import { IndividualPost } from "./IndividualPost";


export const AllPosts = ({ posts, viewComments, comments, deletePost }) => {
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
          <>
            <IndividualPost key={post.id} post={post} viewComments={viewComments} deletePost={deletePost} />
            <>
              {comments.map((comment) => (
                <IndividualComment key={comment.id} comment={comment} />
              ))}

</>
</>
        ))}
      </tbody>
    </table>





  );
};