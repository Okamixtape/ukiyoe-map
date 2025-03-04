"use client";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { useMapContext } from "@/context/MapContext";
import { sampleItems } from "@/data/sampleItem";
import MapMarker from "@/features/map/components/MapMarker";
import L from "leaflet";

// Fix Leaflet icon issues with Next.js
function fixLeafletIcons() {
  // Only run on client side
  if (typeof window !== "undefined") {
    // @ts-expect-error - Leaflet's Icon.Default.prototype._getIconUrl is not typed but exists at runtime
    delete L.Icon.Default.prototype._getIconUrl;
    
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png"
    });
  }
}

export default function Map() {
  const { filteredItems, setFilteredItems } = useMapContext();
  
  // Fix Leaflet icons on initial load
  useEffect(() => {
    fixLeafletIcons();
  }, []);
  
  // Load sample items when no items are loaded
  useEffect(() => {
    if (filteredItems.length === 0) {
      setFilteredItems(sampleItems);
    }
  }, [filteredItems.length, setFilteredItems]);
  
  return (
    <div className="map-container">
      <MapContainer 
        center={[35.6895, 139.6917]} 
        zoom={5} 
        className="map"
        zoomControl={false} // Désactiver les contrôles de zoom par défaut
      >
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* Utiliser le composant ZoomControl de react-leaflet à la place */}
        <ZoomControl position="bottomright" />
        
        {/* Render markers for the filtered items */}
        {filteredItems.map(item => (
          <MapMarker key={item.id} item={item} />
        ))}
      </MapContainer>
    </div>
  );
}