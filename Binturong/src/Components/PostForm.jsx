

import React,{useState} from 'react';

function PostForm() {

    //setting state of the form to be hidden when PostForm first loads.
    const [showForm,setShowForm] = useState(false);
    const [geotagging, setGeotagging] = useState(false);
        const [text, setText] = useState('');

    function displayForm() {
        //Function sets form to visible
        setShowForm(!showForm);
    }

    function handleGeotaggingChange(e) {
            setGeotagging(e.target.checked);
        }

        function handleTextChange(e) {
            setText(e.target.value);
        }

        function handleSubmit(e) {
                e.preventDefault();
                const postData = {
                    text,
                    location: geotagging ? location : null, // Only include location if geotagging is enabled
                    file: e.target.postfile.files[0], // This will hold the uploaded file
                };
                onPost(postData);
                // Clear the form after submission
                setShowForm(false);
                setText('');
                setGeotagging(false);
       }

    return(
        <div>
             <button onClick={displayForm}>Post+</button>
        
             {showForm &&(
            <div>
                <form id="post-form" onSubmit={handleSubmit}>
                    <textarea id="posttextbox"
                              name= "posttext"
                              rows= "5"
                              cols="50"
                              value={text}
                              onChange={handleTextChange}
                              placeholder="Text Goes here"
                              />
                              <br/>

                    <label htmlFor ="geotagging">
                        Turn on Geotagging?
                        <br/>
                        <input
                        type="checkbox"
                        id="geotagging"
                        name ="geotagging"
                        value="GeoTagging?"
                        onChange={handleGeotaggingChange}
                        />
                        </label><br/>
                    <label htmlFor ="postfile">
                        Upload files

                         <input type ="file" id="postfile" name="postfile"/>

                         </label>
                         <br/>
                    <button type ="submit">Post</button>
                </form>
            </div>
            )} 
        </div> 
            
        
    );
}


export default PostForm;