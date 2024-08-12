import React from "react";
import axios from "axios";

function Logout({ setAuthenticated }) {

    const handleLogout = async () => {
        try {
            console.log("Sending logout request...");
            const response = await axios.get("http://localhost:8080/user/logout", {
                withCredentials: true,
            });
            console.log("Logout response:", response);
            if (response.status === 200) {
                setAuthenticated(false);
                console.log("User logged out successfully");
            } else {
                console.error("Logout failed with status:", response.status);
            }
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
