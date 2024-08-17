//}Home page
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

const Home = ({ authenticated }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
        //where should this fetch from


          const response = await fetch(`/api/search?keyword=${searchTerm}`);
          const results = await response.json();
          setSearchResults(results);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      };

    return (
           <div>
            <div className = {'appTitle'}>
                <h1>Welcome to 2GETHER!</h1>
                <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleSearch={handleSearch}
                />
                <SearchResults results={searchResults} />
            </div>
                {authenticated ? (
                    <div>
                        <h2>Welcome Back!</h2>
                        <p>Test Text Test Text Test Text</p>
                    </div>
                ) : (
                    <div>
                        <p>Please log in below or if you haven't joined take a moment to register!</p>
                        <Link to = "/login">Login</Link> | <Link to = "/register">Register</Link>
                    </div>
                )}
            </div>
)};


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
  