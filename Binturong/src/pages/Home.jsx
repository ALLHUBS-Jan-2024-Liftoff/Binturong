import React, {useState} from 'react';
import Search from '../Components/Search.jsx';
import PostSearchResults from '../Components/PostSearchResults.jsx';
import { Link } from 'react-router-dom';
import { SendLike }  from '../Components/Services/LikeService';
// import { SendLike, RemoveLike } from "../Services/LikeService";
import "../App.css";

// Home page - Main Page
// openLoginDialog and openRegisterDialog will check to see if either of those dialog boxes are to be set to visible
const Home = ({ authenticated, openLoginDialog, openRegisterDialog }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (keyword) => {
        try {
          const response = await fetch(`http://localhost:8080/search?keyword=${keyword}`);
          const results = await response.json();
          setSearchResults(results);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      };

    const handleLike = (postId) => {
        };

    const handleShare = (postId) => {
            const postUrl = `http://localhost:5173/post/${postId}`;
            navigator.clipboard.writeText(postUrl)
                .then(() => {
                    alert("Post URL copied to clipboard");
                })
                .catch(error => {
                    console.error("Error copying URL", error);
                });
        };

    return (
        <div className = "appTitle">
            <h1>Welcome to 2GETHER!</h1>


            {/* Displays either the Welcome back portion or the Please log in depending on the logged in state */}
            {authenticated ? (
                <div className = "homeText">
                    <h2>Welcome Back!</h2>
                    <SearchBar
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleSearch={handleSearch}
                    />
                    <SearchResults
                        results={searchResults}
                        handleLike={handleLike}
                        handleShare={handleShare}
                    />
                    <p>Test Text Test Text Test Text</p>
                </div>
            ) : (
                <div className = "homeText">
                    <p>Please log in below or if you haven't joined take a moment to register!</p>
                    <button onClick={openLoginDialog}>Login</button> | <button onClick={openRegisterDialog}>Register</button>
                </div>
            )}
        </div>
    );
};


  const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
    return (
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search posts..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  };

  const SearchResults = ({ results, handleLike, handleShare }) => {
    return (
      <div>
        {results.length > 0 ? (
          results.map((result) => (
            <div key={result.id}>
              <h2>{result.title}</h2>
              <p>{result.post_text}</p>
              <button onClick={() => handleLike(result.id)}>Like</button>
              <button onClick={() => handleShare(result.id)}>Share</button>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    );
  };

export default Home;