"use client";
// app/features/map/components/MapControls.tsx
import React from 'react';
import { useMap } from 'react-leaflet';
import { config } from '@/config';

const MapControls: React.FC = () => {
  const map = useMap();
  
  // Réinitialiser la vue de la carte
  const handleResetView = () => {
    map.setView(
      config.map.defaultCenter,
      config.map.defaultZoom,
      { animate: true, duration: 1 } // spécifier duration comme nombre
    );
  };
  
  // Zoomer
  const handleZoomIn = () => {
    map.zoomIn(1); // Pass a number for zoom delta (1 level)
  };
  
  // Dézoomer
  const handleZoomOut = () => {
    map.zoomOut(1); // Pass a number for zoom delta (1 level)
  };
  
  return (
    <div className="custom-map-controls">
      <button 
        className="map-control-button" 
        onClick={handleZoomIn}
        aria-label="Zoom in"
        title="Zoom avant"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
      
      <button 
        className="map-control-button" 
        onClick={handleZoomOut}
        aria-label="Zoom out"
        title="Zoom arrière"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
      
      <button 
        className="map-control-button" 
        onClick={handleResetView}
        aria-label="Reset view"
        title="Réinitialiser la vue"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        </svg>
      </button>
    </div>
  );
};

export default MapControls;