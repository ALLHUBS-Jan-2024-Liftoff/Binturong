import { useEffect ,useState} from "react";
import { LoadSaves } from "./LoadSaves";
import { GetUserSaves } from "../Services/savesService";
import React from "react";

export const UserSavedPostsFeed = () => {
    const [posts, setPosts] = useState([]);
    const userId = 53;


    useEffect(() => {
        //fetch all posts when component mounts
        GetUserSaves(userId)
        
        .then(setPosts)
        .catch((error) => {
            console.error("ERROR: post fetching failed!", error);
        })
    },[]);

    return(
        <div>
        <LoadSaves posts={posts}/>
        
            </div>
    )
}