import { IndividualUserPost } from "./IndividualUserPost";

export const UserPosts= ({posts,deletePost,updatePost}) => {
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
        <IndividualUserPost key={post.id} post={post} deletePost={deletePost} updatePost={updatePost}/>
      ))}
    </tbody>
  </table>





);
};