//Start of the User Feed page
import PostForm from "../Components/PostForm"
import LoadPost from "../Components/LoadPost";
import "../App.css";

const UserFeed = () => {

 return(
  <>
  <div className = "homeText">
  <PostForm />
  <LoadPost />
  </div>
  </>
);

}


  export default UserFeed;

