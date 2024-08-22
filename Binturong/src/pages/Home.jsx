//Home page
import React, {useState} from 'react';
import Search from '../Components/Search.jsx';
import PostSearchResults from '../Components/PostSearchResults.jsx';
import { Link } from 'react-router-dom';
import "../App.css";

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

    return (
        <div className = "appTitle">
            <h1>Welcome to 2GETHER!</h1>

            {authenticated ? (
                <div className = "homeText">
                    <h2>Welcome Back!</h2>
                    <SearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    handleSearch={handleSearch}
                    />
                    <SearchResults results={searchResults} />
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

  const SearchResults = ({ results }) => {
    return (
      <div>
        {results.length > 0 ? (
          results.map((result) => (
            <div key={result.id}>
              <h2>{result.title}</h2>
              <p>{result.post_text}</p>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    );
  };

export default Home;