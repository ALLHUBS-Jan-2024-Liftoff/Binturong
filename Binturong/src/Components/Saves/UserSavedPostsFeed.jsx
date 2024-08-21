import { useEffect ,useState} from "react";
import { LoadSaves } from "./LoadSaves";
import { GetUserSaves } from "../Services/savesService";

export const UserSavedPostsFeed = () => {
    const [posts, setPosts] = useState([]);
    const user = "";


    useEffect(() => {
        //fetch all posts when component mounts
        GetUserSaves(user)
        
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