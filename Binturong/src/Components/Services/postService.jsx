import axios from "axios";

const BASEURL = "http://localhost:8080";

export const GetAllPostsFetch = async () => {
  try {
    const response = await axios.get(`${BASEURL}/userFeed/getAll`, {
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
  try {
    const response = await axios.get(`${BASEURL}/userFeed/getPost`, {
      params: { postId },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error GetPostFetch failed.", error);
    throw error;
  }
};

export const addPost = async (userId, title, text, geoTag, file) => {
  try {
    const response = await axios.post(`${BASEURL}/userFeed/newpost`, null, {
      params: {
        userId,
        title,
        text,
        geoTag,
        file,
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error failed.", error);
    throw error;
  }
};

export const GetUserPostsFetch = async (userId) => {
  try {
    const response = await axios.get(`${BASEURL}/userProfile/getAllUsersPosts`, {
      params: { userId },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error GETUSERPOSTFETCH failed.", error);
    throw error;
  }
};

export const deletePost = async (postId) => {
  try {
    await axios.post(`${BASEURL}/userProfile/delete`, null, {
      params: { postId },
      withCredentials: true,
    });
  } catch (error) {
    console.error("ERROR: POST NOT DELETED", error);
  }
};

export const updatePostFetch = async (postId, title, text, geoTag, file) => {
  try {
    await axios.put(`${BASEURL}/userProfile/update/${postId}`, {
      title,
      text,
      geoTag,
      file,
    }, {
      withCredentials: true,
    });
  } catch (error) {
    console.error("there was an error when updating post", error);
  }
};
