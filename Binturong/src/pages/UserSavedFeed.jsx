//Start of the Users Saved Feed page
import "../App.css";
import React from "react";
import { UserSavedPostsFeed } from "../Components/Saves/UserSavedPostsFeed";

const UserSavedFeed = () => {
    return (
      <>
      <UserSavedPostsFeed userId={1} />
      </>
    );
  };

export default UserSavedFeed;
  