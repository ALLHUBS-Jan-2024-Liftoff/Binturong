import React, { useEffect, useRef, useState } from 'react';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

function GoogleMaps({ initialLocation, onLocationSelect }) {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    const loadScript = (url, callback) => {
      const existingScript = document.querySelector(`script[src="${url}"]`);
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        script.defer = true;
        script.onload = callback;
        document.head.appendChild(script);
      } else {
        if (existingScript.onload) {
          existingScript.onload = () => {
            callback();
          };
        } else {
          callback();
        }
      }
    };

    const initMap = () => {
      setIsScriptLoaded(true);
    };

    if (!window.google) {
      window.initMap = initMap;
      loadScript(`https://maps.googleapis.com/maps/api/js?key=AIzaSyDUpnOnXkzomhYNXa6-L5shDEBH8642ino&callback=initMap`, initMap);
    } else {
      initMap();
    }
  }, []);

  useEffect(() => {
    if (isScriptLoaded && mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: initialLocation || { lat: -34.397, lng: 150.644 }, // Use initialLocation if provided
        zoom: 8,
      });

      if (initialLocation) {
        const marker = new window.google.maps.Marker({
          position: initialLocation,
          map,
        });
        markerRef.current = marker;
      }

      map.addListener('click', (e) => {
        const clickedLocation = {
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        };

        if (markerRef.current) {
          markerRef.current.setPosition(clickedLocation);
        } else {
          const markerOptions = {
            position: clickedLocation,
            map,
          };

          const marker = new window.google.maps.Marker(markerOptions);
          markerRef.current = marker;
        }

        onLocationSelect(clickedLocation);
      });
    }
  }, [isScriptLoaded, initialLocation, onLocationSelect]);

  return (
    <div ref={mapRef} style={containerStyle}>
      {/* Map will be rendered here */}
    </div>
  );
}

export default GoogleMaps;