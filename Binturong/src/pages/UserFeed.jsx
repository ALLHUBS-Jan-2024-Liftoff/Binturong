//Start of the User Feed page
import LoadPost from "../Components/LoadPost";
import PostForm from "../Components/PostForm";
import { LoadPostUserFeed } from "../Components/Posts/LoadPostsUserFeed";
import "../App.css";

const UserFeed = () => {

 return(
  <>
  <div className = "homeText">
  <PostForm />
  <LoadPost />
  <LoadPostUserFeed/>
 </div>
 </>
);

}


  export default UserFeed;

