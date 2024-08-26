import React, { useState } from 'react';

export const AddPostForm =({addPost}) => {

    //sets states and gives starting variables
    const [text, setText] = useState('')
    const [geoTag, setGeoTag] = useState('')
    const [file, setFile] = useState('')
    const [title, setTitle] = useState('')


    //Submits Posts to SQL Database
    const savePost =(e) => {
if (title.length >= 3 && title.length <= 50 && text !="" && text.length <= 255){
        e.preventDefault();

        addPost(title,text,geoTag,file)
        setTitle('');
        setText('');
        setGeoTag('');
        setFile('');
        
    }
    else{
        alert("title must be between 3 and 50 characters and text 255 max.");
    }
}

    return (    
            
                    <form id="post-form"> 
                        <label for="title">Title</label>
                        <input type="text"
                            id="title"
                            name="title"
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }}
                            required
                        ></input><br />

                        <textarea id="posttextbox"
                            name="posttext"
                            value={text}
                            rows="5" cols="50"
                            onChange={(e) => { setText(e.target.value) }}>
                            Text Goes here
                        </textarea><br />

                        <label for="geotagging">Turn on Geotagging?<br />
                            <input type="checkbox"
                                id="geotagging"
                                name="geotagging"
                                value={geoTag}
                                onChange={(e) => { setGeoTag(e.target.value) }} />

                        </label>
                        <br />

                        <label for="postfile">Upload Images
                            <input type="file"
                                id="postimage"
                                accept = "jpg, jpeg, .png, .gif"
                                name="postfile"
                                value={file}
                                onChange={(e) => { setFile(e.target.value) }}>
                            </input>
                        </label>

                        <button onClick={savePost}>Post</button>
                    </form>
                  
    )
}
