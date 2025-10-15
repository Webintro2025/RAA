'use client';
import React, { useEffect, useRef, useState } from 'react';

const Maps = () => {
  const mapRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null);
  const mapInstance = useRef(null);

  const destinationLatLng = [28.79776000 , 77.08096000];
  const destinationAddress = 'D-120, Sector-5, Bawana Industrial Area, New Delhi-110039, Delhi, India';
    
  

  useEffect(() => {
    // Load Leaflet CSS
    const leafletCSS = document.createElement('link');
    leafletCSS.rel = 'stylesheet';
    leafletCSS.href = 'https://unpkg.com/leaflet/dist/leaflet.css';
    document.head.appendChild(leafletCSS);

    // Load Leaflet JS
    const leafletScript = document.createElement('script');
    leafletScript.src = 'https://unpkg.com/leaflet/dist/leaflet.js';
    leafletScript.async = true;

    leafletScript.onload = () => {
      if (window.L && mapRef.current && !mapInstance.current) {
        const L = window.L;

        const map = L.map(mapRef.current).setView(destinationLatLng, 13);
        mapInstance.current = map;

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);

        const destMarker = L.marker(destinationLatLng).addTo(map);
        destMarker.bindPopup(destinationAddress).openPopup();

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setUserLocation([latitude, longitude]);

              L.marker([latitude, longitude])
                .addTo(map)
                .bindPopup('You are here');
            },
            (error) => {
              console.warn('Geolocation error:', error);
            },
            { enableHighAccuracy: true }
          );
        }
      }
    };

    document.body.appendChild(leafletScript);

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
      document.head.removeChild(leafletCSS);
      document.body.removeChild(leafletScript);
    };
  }, []);

  const handleGetDirections = () => {
    let url = `https://www.google.com/maps/dir/?api=1&destination=${destinationLatLng.join(',')}`;
    if (userLocation) {
      url += `&origin=${userLocation.join(',')}`;
    }
    window.open(url, '_blank');
  };

  return (
    <div className="w-full mb-1.5 bg-[#F0F8FF]" style={{ minHeight: 400 }}>
      <div className="mb-2 text-center font-semibold text-[#449833] text-xs sm:text-base md:text-lg">
        Destination: {destinationAddress}
      </div>
      <div
        ref={mapRef}
        style={{
          width: '100%',
          height: 400,
          borderRadius: 12,
          overflow: 'hidden',
        }}
      />
      <div className="text-center mt-4">
        <button
          onClick={handleGetDirections}
          className="bg-[#449833] hover:bg-[#48A1C7] text-white px-4 py-2 rounded shadow text-xs sm:text-base"
        >
          Get Directions
        </button>
      </div>
    </div>
  );
};

export default Maps;
