

import React,{useState} from 'react';

function PostForm() {

    //setting state of the form to be hidden when PostForm first loads.
    const [showForm,setShowForm] = useState(false);

    function displayForm() {
        //Function sets form to visible
        setShowForm(!showForm);
    }
    return(
        <div>
             <button onClick={displayForm}>Post+</button>
        
             {showForm &&(
            <div>
                <form id="post-form">
                    <textarea id="posttextbox" name= "posttext" rows= "5" cols="50">Text Goes here</textarea><br/>
                    <label for ="geotagging">Turn on Geotagging?<br/><input type="checkbox" id="geotagging" name ="geotagging" value="GeoTagging?"></input></label><br/>
                    <label for ="postfile">Upload files<input type ="file" id="postfile" name="postfile"></input></label>
                    <button>Post</button>
                </form>
            </div>
            )} 
        </div> 
            
        
    )
}


export default PostForm;