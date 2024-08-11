import React from "react";
import axios from "axios";

function Logout ({ setAuthenticated }) {

    const handleLogout = async () => {
        try {
            await axios.get ("http://localhost:8080/user/logout",
            {
                withCredentials: true,
            });
            setAuthenticated (false);
        } catch (error) {
            console.error ("Logout failed");
        }
    };

    return <button onClick = {handleLogout} >Logout</button>;
}