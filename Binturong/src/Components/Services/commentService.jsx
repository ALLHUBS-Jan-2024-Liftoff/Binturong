import axios from 'axios';

const BASEURL = "http://localhost:8080";

export const ViewComments = async (postId) => {

    

    try{
        const response = await axios.get(`${BASEURL}/userFeed/viewcomments` , {
            params: {postId}
    })
    return response.data
    } catch (error) {
        console.error(" VIEWCOMMENTS there was an error when getting comments",error);
        throw error;
    }


}

export const AddComment = async (postId,text,file) => {
    postId= Number(postId)
    try{
        const response = await axios.post(`${BASEURL}/userFeed/addcomment`,null  , {
            params: {postId,text,file} ,
        });
        return response.data;
        
    } catch (error) {
        console.error("there was an error when creating Comment",error);
        throw error;
    }
}

export const deleteComment = async (commentId) => {
    try {
        await axios.post(`${BASEURL}/userProfile/deleteComment`, null, {
            params: {commentId} ,
        });
    } catch(error) {
        console.error("ERROR: COMMENT NOT DELETED", error);
    }
};