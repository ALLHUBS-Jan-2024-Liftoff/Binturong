import axios from "axios";


const DeletePost = async (postId) => {
console.log("DeletePost Reached");
    try {
        await axios.post("http://localhost:8080/userprofile/delete", null, {
            params: {postId},
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postId),
        
        }).then(() => {
            //Reloads Window when fetch is finished
            window.location.reload();

        })
    }catch (error) {
        console.error("There was an error deleting post!", error);
        throw error;
    
    }
    

   
}


export default DeletePost;