import axios from "axios";
const BASEURL = "http://localhost:8080";



//gets all saves for user
export const GetUserSaves = async (userId) => {
    try{
        const response = await axios.get(`${BASEURL}/usersavedfeed/getsavedposts`, {
            params: {userId} ,
    });
        return response.data;
    }
    catch (error) {
        console.error("Error GETUSERSAVES failed.", error);
        throw error
    }
}


//Sends the post to the users save list in back end
export const AddSave = async (userId,postId) => {
    try {
        await axios.post(`${BASEURL}/usersavedfeed/savepost`, null, {
            params: {userId,postId} ,
        });
    } catch(error) {
        console.error("ERROR: Save NOT added", error);
    }
}


//This is unused for now might add implimentation later :)
export const deleteSave = async (postId) => {
    try {
        await axios.post(`${BASEURL}/usersavedfeed/deletesave`, null, {
            params: {postId} ,
        });
    } catch(error) {
        console.error("ERROR: Save NOT DELETED", error);
    }
};