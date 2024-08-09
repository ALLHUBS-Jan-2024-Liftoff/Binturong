
import {useEffect, useState} from 'react';

function LoadPost(){

// Gets Array ready for posts
const [posts,setPosts] = useState([])

useEffect(()=>{
    //Calls from SQL and Backend for all posts by id
    fetch("http://localhost:8080/userfeed/getAll")
    .then(res=>res.json())
    .then((result)=>{
        setPosts(result);
    }
    )
},[])


// Maps out Posts needs Reworking for formating later but functional
return(
    <div>

    {posts.map(post=>(
    <tr key={post.id}>
      <p>  Id: {post.id} </p> 
      <p> Title: {post.title}  </p>
      <p>Text:{post.text}  </p>
      <p> Geotag:{post.geoTag}  </p>
      <p>File:{post.file} </p>
    

    </tr>
    ))
}
    
    </div>


)  

}


export default LoadPost;