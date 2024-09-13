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
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" required />

            <label htmlFor="text">Text:</label>
            <textarea id="text" name="text" required />

            <label htmlFor="geoTag">GeoTag:</label>
            <input type="text" id="geoTag" name="geoTag" />

            <label htmlFor="file">File:</label>
            <input type="file" id="file" name="file" />

        <button type="submit">Add Post</button>
    </form>
    );
};
