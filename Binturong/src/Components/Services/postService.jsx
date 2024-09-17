import axios from "axios";

const BASEURL = "http://localhost:8080";

export const getToken = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser !== "undefined") {
        try {
            const parsedUser = JSON.parse(storedUser);
            return parsedUser.token; // Ensure this matches the token field in your user object
        } catch (error) {
            console.error("Error parsing user from local storage:", error);
            return null;
        }
    }
    return null;
};

export const GetAllPostsFetch = async () => {
    const token = getToken();
    console.log("Token:", token);
    try {
        const response = await axios.get(`${BASEURL}/userFeed/getAll`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        });
        console.log("Fetched posts:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error AllPostFetch failed.", error);
        throw error;
    }
};

export const GetPostFetch = async (postId) => {
    const token = getToken();
    try{
        const response = await axios.get(`${BASEURL}/userFeed/getPost`, {
            params: {postId},
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        console.error("Error GetPostFetch failed.", error);
        throw error;
    }
};

export const addPost = async (userId, title,text,geoTag,file) => {
    const token = getToken();
    try{
        const response = await axios.post(`${BASEURL}/userFeed/newpost`, null , {
            params: {
                userId,
                title,
                text,
                geoTag,
                file
            },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error  failed.",error);
        throw error;
    }
};

export const GetUserPostsFetch = async (userId) => {
    const token = getToken();
    try{
        const response = await axios.get(`${BASEURL}/userProfile/getAllUsersPosts`, {
            params: { userId },
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        });
        return response.data;
    }
    catch (error) {
        console.error("Error GETUSERPOSTFETCH failed.", error);
        throw error;
    }
};

export const deletePost = async (postId) => {
    const token = getToken();
    try {
        await axios.post(`${BASEURL}/userProfile/delete`, null, {
            params: {postId},
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        });
    } catch(error) {
        console.error("ERROR: POST NOT DELETED", error);
    }
};

export const updatePostFetch = async (postId,title,text,geoTag,file) => {
    const token = getToken();
    try{
        await axios.put(`${BASEURL}/userProfile/update/${postId}`, {
           title,
           text,
           geoTag,
           file,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        console.error("there was an error when updating post", error);
    }
};