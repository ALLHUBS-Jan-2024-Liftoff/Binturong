import axios from "axios";

const BASEURL = "http://localhost:8080";
const userId =1;

export const GetAllPostsFetch= async ()=> {
    
//Calls from SQL and Backend for all posts by id
 //Calls from SQL and Backend for all posts by id
try{
 const response = await axios.get(`${BASEURL}/userFeed/getAll`, {
    
 });
 return response.data;

}
 catch (error) {
    console.error("Error AllPostFetch failed.", error);
    throw error;
    }
};

export const GetPostFetch = async (postId) => {

    try{
        const response = await axios.get(`${BASEURL}/userFeed/getPost`, {
            params: {postId},
           
        });
        return response.data;
       
       }
       catch (error) {
        console.error("Error GetPostFetch failed.", error);
        throw error;
        }

}

export const addPost = async (title,text,geoTag,file) => {
    try{
        const response = await axios.post(`${BASEURL}/userFeed/newpost`, null , 
            {
            params: {title,text,geoTag,file}
              } 
        );
        return response.data;
        
    } catch (error) {
        console.error("Error addPost failed.",error);
        throw error;
    }
}

export const GetUserPostsFetch = async () => {
    try{
        const response = await axios.get(`${BASEURL}/userProfile/getAllUsersPosts`, {
            params: {userId}
        });

        return response.data;
    }
    catch (error) {
        console.error("Error GETUSERPOSTFETCH failed.", error);
        throw error
    }
}

export const deletePost = async (postId) => {
    try {
        await axios.post(`${BASEURL}/userProfile/delete`, null, {
            params: {postId} ,
        });
    } catch(error) {
        console.error("ERROR: POST NOT DELETED", error);
    }
};

export const updatePostFetch = async (postId,title,text,geoTag,file) => {
    try{
        await axios.put(`${BASEURL}/userProfile/update`, null, {
            params : {postId,title,text,geoTag,file} ,
        });
    } catch (error) {
        console.error("there was an error when updating post", error);
    }
};