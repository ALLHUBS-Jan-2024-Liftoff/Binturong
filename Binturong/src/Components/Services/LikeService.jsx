import axios from  "axios";

export const SendLike = async (postId,userId) => {
    try{
        const response = await axios.post(`${BASEURL}/userFeed/newpost` , null , {
            params: {postId,userId} ,
        });
        return response.data;
        
    } catch (error) {
        console.error("there was an error when creating post",error);
        throw error;
    }
    
}