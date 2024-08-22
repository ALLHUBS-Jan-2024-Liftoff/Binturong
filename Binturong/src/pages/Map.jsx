import React, { useEffect, useState } from 'react';
import GoogleMaps from '../Components/GoogleMaps.jsx';
import PostForm from  '../Components/PostForm.jsx';
import "../App.css";

function Map() {
  const [location, setLocation] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
           setUserLocation({ lat: latitude, lng: longitude });
           console.log('User Location:', { lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error fetching location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const handleLocationSelect = (location) => {
    setLocation(location);
    // Add any additional logic to handle the selected location
    console.log('Selected Location:', location);
  };

  const handlePost = (postData) => {
    // Logic to post the location
    console.log('Post Data:', postData);
    //send post data to serv with API call
  };

  return (
    <div className="homeText">
          {userLocation ? (
              <div className ="map-container">
                <GoogleMaps className = "google-maps" initialLocation={userLocation} onLocationSelect={handleLocationSelect} />
              </div>
          ) : (
            <p>Loading map...</p>
          )}
          <PostForm onPost={handlePost} location={location} />
        </div>
      );
    }

export default Map;
