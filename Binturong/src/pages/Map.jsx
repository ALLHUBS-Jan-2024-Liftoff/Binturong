import React, {useState} from 'react';
import GoogleMaps from '../Components/GoogleMaps.jsx';

function Map() {
    const [location, setLocation] = useState(null);

    const handleLocationSelect = (location) => {
        setLocation(location);

        console.log('Selected Location: ', location);
    };

  return (
    <div>
      <GoogleMaps onLocationSelect={handleLocationSelect} />
      {location &&(
        <div>
            <p>Selected Location:</p>
         <p>Latitude:  {location.lat}</p>
         <p>Longitude: {location.lng}</p>
        </div>
      )}
    </div>
  );
}

export default Map;
