import React, { useState } from 'react';
import { AddComment } from '../Services/commentService';
import { useNavigate } from 'react-router-dom';


export const NewCommentForm = () => {
    
        //sets states and gives starting variables
        const [text, setText] = useState('')
        const [file, setFile] = useState('')

        let postId =Number(location.search.replace("?",""));
        const Navigate = useNavigate();
    
    
    

        //Submits Posts to SQL Database
        const SaveComment =(e) => {
    if (text !="" && text.length <= 255){
            e.preventDefault();
            //Still need to add user
    
            AddComment(postId,text,file)
            
            .then(
                Navigate(`/comments/?${postId}`, {replace:true})
            )
            
        }
        else{
            alert("Error: Text cant be blank and text is 255 characters max.");
        }
    }
    
        return (    
                    <div>
                        <form id="post-form"> 
                            <label>What would you like to say?</label> <br/>
                            <textarea id="posttextbox"
                                name="posttext"
                                value={text}
                                rows="5" cols="50"
                                onChange={(e) => { setText(e.target.value) }}>
                                Text Goes here
                            </textarea><br />
    
                            <label for="postfile">Upload files
                                <input type="file"
                                    id="postfile"
                                    name="postfile"
                                    value={file}
                                    onChange={(e) => { setFile(e.target.value) }}>
                                </input>
                            </label>
    
                            <button onClick={SaveComment}>Post</button>
                        </form>
                        </div>
        )
    }