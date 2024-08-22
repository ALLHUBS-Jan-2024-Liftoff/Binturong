import { useState } from "react";

export const UpdateComment = (commentId) => {

      //sets states and gives starting variables
  const [text, setText] = useState('')
  const [file, setFile] = useState('')

  const user = localStorage.getItem("user")


  //Submits Posts to SQL Database
  const updateComment =(e) => {
if (title.length >= 3 && title.length <= 50 && text !="" && text.length <= 255){
      e.preventDefault();

      addPost(commentId,user.id,user.username,text,file)
      setText('');
      setFile('');
      
  }
  else{
      alert("title must be between 3 and 50 characters and text 255 max.");
  }
}

  return (    
              <div>
                  <form id="post-form"> 
                 

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

                      <button onClick={updateComment}>Post</button>
                  </form>
                  </div>
  )
}

    



}