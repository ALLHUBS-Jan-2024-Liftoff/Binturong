import axios from "axios";
const BASEURL = "http://localhost:8080";

export const GetUserSaves = async (user) => {
    try{
        const response = await axios.get(`${BASEURL}/usersavedfeed/getsavedposts`, {
            params: {user} ,
    });
        return response.data;
    }
    catch (error) {
        console.error("Error GETUSERSAVES failed.", error);
        throw error
    }
}

export const AddSave = async (postId) => {
    try {
        await axios.post(`${BASEURL}/usersavedfeed/addsave`, null, {
            params: {postId} ,
        });
    } catch(error) {
        console.error("ERROR: Save NOT added", error);
    }
}

export const deleteSave = async (postId) => {
    try {
        await axios.post(`${BASEURL}/usersavedfeed/deletesave`, null, {
            params: {postId} ,
        });
    } catch(error) {
        console.error("ERROR: Save NOT DELETED", error);
    }
};