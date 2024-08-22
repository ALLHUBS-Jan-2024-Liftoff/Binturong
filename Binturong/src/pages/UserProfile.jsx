//Start of the User Profile page
import { LoadUserPostUserProfile } from "../Components/Posts/LoadUserPostUserProfile";
import React from 'react';
import LoyaltyScore from '../Components/LoyaltyScore.jsx';


const UserProfile = () => {
    return (

         <div>

                            <h1>User Profile</h1>
                            <h3>Thank you for your contribution!</h3>
                            <h3>Your Loyalty Score is:  </h3>
                            <LoyaltyScore userId={userId} />
                        <div>
                          
                              <LoadUserPostUserProfile/>
                              </div>
</div>
        )
  };
  
  export default UserProfile;
  