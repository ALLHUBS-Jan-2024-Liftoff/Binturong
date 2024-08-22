import axios from 'axios';

export const ViewComments = async (postId) => {

    const BASEURL = "http://localhost:8080";

    try{
        const response = await axios.get(`${BASEURL}/userfeed/viewcomments`, {
            params: {postId}
    })
    return response.data
    } catch (error) {
        console.error(" VIEWCOMMENTS there was an error when getting comments",error);
        throw error;
    }


}

export const AddComment = async (postId,text,file) => {
    try{
        const response = await axios.post(`${BASEURL}/userfeed/addcomment` , null , {
            params: {postId,text,file} ,
        });
        return response.data;
        
    } catch (error) {
        console.error("there was an error when creating post",error);
        throw error;
    }
}