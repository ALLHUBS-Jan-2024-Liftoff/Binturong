import axios from  "axios";

// Function to send a like to a post
export const SendLike = async (postId, userId) => {
    try{
        // POST request to send a like to a post
        const response = await axios.post(`${BASEURL}/userFeed/newpost` , null , {
            params: { postId, userId } ,
        });
        return response.data;
        
    } catch (error) {
        console.error("There was an error when creating post",error);
        throw error;
    }
};