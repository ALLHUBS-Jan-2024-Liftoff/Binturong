

import React,{useState} from 'react';

function PostForm() {
    const [showForm,setShowForm] = useState(false);

    function displayForm() {
        setShowForm(!showForm);
    }
    return(
        <div>
           
                <button onClick={displayForm}>Post+</button>
        
            

             {showForm &&(
            <div>
                <form id="post-form">
                    <textarea id="posttextbox" name= "posttext" rows= "5" cols="50">Text Goes here</textarea>
                    <input type="checkbox" id="geotagging" name ="geotagging" value="GeoTagging?"></input>
                    <label for ="geotagging">Turn on Geotagging?</label>
                    <label for ="postfile">Upload files</label>
                    <input type ="file" id="postfile" name="postfile"></input>
                </form>
            </div>
            )} 
        </div> 
            
        
    )
}


export default PostForm;