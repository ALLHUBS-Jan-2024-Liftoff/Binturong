
import {useEffect, useState} from 'react';
import postOptionsDropdown from './PostDropDownMenu';
import postDropDownMenu from './PostDropDownMenu';

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
<html>
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
    
    
      <div class="dropdown">
        
        
  <button onclick={"postDropDownMenu()"} class="dropbtn">options</button>
  <div id="postDropdown" class="dropdown-content">
  <a href="edit#">Edit</a>
    <a href="delete#">Delete</a>
 
  </div>
  </div>
</div> 
    

    </tr>

    
    ))
}

   

</html>
)  

}


export default LoadPost;