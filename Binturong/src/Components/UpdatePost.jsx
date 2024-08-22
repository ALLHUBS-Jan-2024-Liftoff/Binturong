

function UpdatePostForm (postId){
     //sets states and gives starting variables
     const [text, setText] = useState('')
     const [geoTag, setGeoTag] = useState('')
     const [file, setFile] = useState('')
     const [title, setTitle] = useState('')
 
 
     //Submits Posts to SQL Database
     function updatePost(e) {
 if (title.length >= 3 && title.length <= 50 && text !="" && text.length <= 255){
 
         e.preventDefault();
         alert("Posted");
 
         const post = { text, geoTag, file, title };
         console.log(post)
         fetch("http://localhost:8080/userprofile/update", {
             method: "PUT",
             params: {postId},
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify(post)
 
         }).then(() => {
             //Reloads Window when fetch is finished
             window.location.reload();
 
         })
 
     }
     else{
         alert("title must be between 3 and 50 characters and text 255 max.");
     }
 }
 //         <!-- On change sets values to there temp variables so they can be sent up in a JSON format -->
     return (    
                     
                     <form id="update-post-form">
                         <label for="title">Title</label>
                         <input type="text"
                             id="title"
                             name="title"
                             value={title}
                             onChange={(e) => { setTitle(e.target.value) }}
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
 
                         <label for="postfile">Upload files
                             <input type="file"
                                 id="postfile"
                                 name="postfile"
                                 value={file}
                                 onChange={(e) => { setFile(e.target.value) }}>
                             </input>
                         </label>
 
                         <button onClick={updatePost}>Post</button>
                     </form>
             
 
 
     )
 }



export default UpdatePostForm;