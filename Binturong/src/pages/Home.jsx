//Home page
import React, {useState} from 'react';
import Search from '../Components/Search.jsx';
import PostSearchResults from '../Components/PostSearchResults.jsx';



const Home = () => {
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
        <div>
              <h1>2Gether</h1>
              <Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onSearch={handleSearch}
              />
              <PostSearchResults results={searchResults} />
            </div>

    );
  };
  export default Home;
  