

import React,{useState} from 'react';

function PostForm() {

    const [postText,setPostText] = useState('')
    const [geoTaggingCheck,setGeoTag] = useState('')
    const [postFile,setFile]= useState('')

    function savePost(e) {
        e.preventDefault();

        const post ={postText,geoTaggingCheck,postFile};
        console.log(post)

    }



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
                    <textarea id="posttextbox"
                     name= "posttext"
                     value={postText}
                      rows= "5"  cols="50"
                      onChange={(e) => {setPostText(e.target.value)}}>
                        Text Goes here
                      </textarea><br/>

                    <label for ="geotagging">Turn on Geotagging?<br/>
                    <input type="checkbox"
                    id="geotagging"
                    name ="geotagging" 
                    value={geoTaggingCheck}
                    onChange={(e) => {setGeoTag(e.target.value)}}>
                    
                    </input>
                    </label>
                    <br/>

                    <label for ="postfile">Upload files
                        <input type ="file" 
                        id="postfile" 
                        name="postfile"
                        value={postFile}
                        onChange={(e) => {setFile(e.target.value)}}>
                            </input>
                            </label>

                    <button onClick={savePost}>Post</button>
                </form>
            </div>
            )} 
        </div> 
            
        
    )
}


export default PostForm;