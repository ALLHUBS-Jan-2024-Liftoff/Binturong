import React, { useEffect, useRef, useState } from 'react';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: -34.397,
  lng: 150.644
};

function GoogleMaps() {
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
        center,
        zoom: 8,
      });

      const markerOptions = {
        position: center,
        map,
      };

      const marker = new window.google.maps.Marker(markerOptions);
      markerRef.current = marker;
    }
  }, [isScriptLoaded]);

  return (
    <div ref={mapRef} style={containerStyle}>
      {/* Map will be rendered here */}
    </div>
  );
}

export default GoogleMaps;
