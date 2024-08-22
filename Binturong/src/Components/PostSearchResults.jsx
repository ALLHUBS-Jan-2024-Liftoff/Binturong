//Post Search Results
import React, {useState} from 'react';
import Search from '../Components/Search.jsx';


const PostSearchResults = ({ results }) => {
  return (
    <div>
      {results.length > 0 ? (
        results.map((result) => (
          <div key={result.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span>ID: {result.id}</span>
            <span>Username: {result.username}</span>
            <span>
              {result.postText ? `Post: ${result.postText}` : `Comment: ${result.commentText}`}
            </span>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};


      export default PostSearchResults;