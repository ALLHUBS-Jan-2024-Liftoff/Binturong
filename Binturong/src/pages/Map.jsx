import React, { useEffect, useState } from 'react';
import GoogleMaps from '../Components/GoogleMaps.jsx';
import PostForm from  '../Components/PostForm.jsx';

function Map() {
  const [location, setLocation] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const userLoc = { lat: latitude, lng: longitude };
          setUserLocation(userLoc);
          setLocation(userLoc); // Optionally, set the map's location to the user's current location
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
    <div>
      <GoogleMaps initialLocation={userLocation} onLocationSelect={handleLocationSelect} />
      <PostForm onPost={handlePost} location={location} />
    </div>
  );
}

export default Map;
