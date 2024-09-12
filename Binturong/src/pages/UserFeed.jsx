//Start of the User Feed page
import { LoadPostUserFeed } from "../Components/Posts/LoadPostsUserFeed";
import "../App.css";
import React from "react";

const UserFeed = () => {

 return(
    <>
        <div className = "homeText">
            <LoadPostUserFeed/>
        </div>
    </>
);

}


  export default UserFeed;

