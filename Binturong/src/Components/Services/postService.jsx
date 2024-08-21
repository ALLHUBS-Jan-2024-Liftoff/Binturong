import axios from "axios";

const BASEURL = "http://localhost:8080";

export const GetAllPostsFetch= async ()=> {
    
//Calls from SQL and Backend for all posts by id
 //Calls from SQL and Backend for all posts by id
try{
 const response = await axios.get(`${BASEURL}/userfeed/getAll`);
 return response.data;

}
 catch (error) {
    console.error("Error AllPostFetch failed.", error);
    throw error;
    }
};

export const addPost = async (title,text,geoTag,file) => {
    try{
        const response = await axios.post(`${BASEURL}/userfeed/newpost` , null , {
            params: {title,text,geoTag,file} ,
        });
        return response.data;
        
    } catch (error) {
        console.error("there was an error when creating post",error);
        throw error;
    }
}

export const GetUserPostsFetch = async () => {
    try{
        const response = await axios.get(`${BASEURL}/userprofile/getAllUsersPosts`);
        return response.data;
    }
    catch (error) {
        console.error("Error GETUSERPOSTFETCH failed.", error);
        throw error
    }
}

export const deletePost = async (postId) => {
    try {
        await axios.post(`${BASEURL}/userprofile/delete`, null, {
            params: {postId} ,
        });
    } catch(error) {
        console.error("ERROR: POST NOT DELETED", error);
    }
};

export const updatePostFetch = async (postId,title,text,geoTag,file) => {
    try{
        await axios.put(`${BASEURL}/userprofile/update`, null, {
            params : {postId,title,text,geoTag,file} ,
        });
    } catch (error) {
        console.error("there was an error when updating post", error);
    }
};