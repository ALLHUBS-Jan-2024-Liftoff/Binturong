
import {useEffect, useState} from 'react';
import postOptionsDropdown from './PostDropDownMenu';
import postDropDownMenu from './PostDropDownMenu';

function LoadPost(){
    const [posts,setPosts] = useState([])

// Gets Array ready for posts

const fetchAllPosts = () =>{ 
    fetch("http://localhost:8080/userfeed/getAll")
    .then(res=>res.json())
    .then((result)=>{
        setPosts(result);
    }
    )

}

useEffect(()=>{
    fetchAllPosts();
    //Calls from SQL and Backend for all posts by id
},[])


// Maps out Posts needs Reworking for formating later but functional
return(
<>
<head>
<link rel="stylesheet" type="text/css" href="../../src/assets/css/userFeed.css" />
</head>

    {posts.map(post=>(
    <tr key={post.id}>
        <div id="postbox" >
      <p>  Id: {post.id} </p> 
      <p> Title: {post.title}  </p>
      <p>Text:{post.text}  </p>
      <p> Geotag:{post.geoTag}  </p>
      <p>File:{post.file} </p>
    
    
     
</div> 
    

    </tr>

    
    ))
}

   

</>
)  

}


export default LoadPost;