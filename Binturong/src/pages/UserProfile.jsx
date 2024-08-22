//Start of the User Profile page
import React from 'react';
import LoyaltyScore from '../Components/LoyaltyScore.jsx';


const UserProfile = () => {
    const userId = 1;  // update this later


    return (
        <div>

                    <h1>User Profile</h1>
                    <h3>Thank you for your contribution!</h3>
                    < LoyaltyScore userId={userId} />


                </div>
    );

  };
  
  export default UserProfile;
  