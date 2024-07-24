import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: -34.397,
  lng: 150.644
};

function GoogleMaps() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDUpnOnXkzomhYNXa6-L5shDEBH8642ino">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default GoogleMaps;
