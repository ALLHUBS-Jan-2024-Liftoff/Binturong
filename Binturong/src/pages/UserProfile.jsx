//Start of the User Profile page
import { LoadUserPostUserProfile } from "../Components/Posts/LoadUserPostUserProfile";
import React, { useEffect, useState } from 'react';
import LoyaltyScore from '../Components/LoyaltyScore.jsx';

import "../App.css";

const UserProfile = () => {

    const userId = 1;  // update this later
    const [user, setUser] = useState(null);

    //Pulls user from local storage so you can call user database columns
    useEffect(() => {
//         const storedUser = localStorage.getItem("user");
//         console.log("Stored User:", storedUser);
//         if (storedUser) {
//             try {
//                 const parsedUser = JSON.parse(storedUser);
//                 console.log("Parsed User:", parsedUser);
//                 setUser(parsedUser);
//             } catch (error) {
//                 console.error("Error parsing user from local storage:", error);
//             }
//         }
    }, []);

   // console.log(user)
    return (
        <div className = "homeText">
            <h1>User Profile</h1>
            <h3>Thank you for your contribution!</h3>
            <h3>Your Loyalty Score is:  </h3>
            <LoyaltyScore userId={userId} />
            <div>
                <LoadUserPostUserProfile />
            </div>
            {user && (
                <div>
                    <h2>Welcome, {user.username}!</h2>
                </div>
            )}
        </div>
    );
};
  
export default UserProfile;
  