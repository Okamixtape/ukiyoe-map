"use client";
// app/components/map/Map.tsx
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { useMapContext } from "@/context/MapContext";
import { sampleItems } from "@/data/sampleItem";
import { UkiyoeItem } from "@/types/UkiyoeItem";
import L from "leaflet";
import { config } from "@/config";
import MarkerClusterGroup from "@/features/map/components/MarkerClusterGroup";
import MapControls from "@/features/map/components/MapControls";
import LoadingIndicator from "@/components/ui/LoadingIndicator";

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
  const { filteredItems, setFilteredItems, setSelectedItem } = useMapContext();
  const [loading, setLoading] = useState(true);
  
  // Fix Leaflet icons on initial load
  useEffect(() => {
    fixLeafletIcons();
  }, []);
  
  // Load sample items when no items are loaded
  useEffect(() => {
    if (filteredItems.length === 0) {
      setFilteredItems(sampleItems);
    }
    
    // Simuler un temps de chargement pour voir l'indicateur
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [filteredItems.length, setFilteredItems]);
  
  // Gérer la sélection d'un marqueur depuis le groupe de clusters
  useEffect(() => {
    const handleMarkerSelect = (event: Event) => {
      const customEvent = event as CustomEvent<UkiyoeItem>;
      setSelectedItem(customEvent.detail);
    };
    
    document.addEventListener('marker-select', handleMarkerSelect);
    
    return () => {
      document.removeEventListener('marker-select', handleMarkerSelect);
    };
  }, [setSelectedItem]);
  
  return (
    <div className="map-container">
      {loading && <LoadingIndicator message="Chargement de la carte..." />}
      
      <MapContainer 
        center={config.map.defaultCenter} 
        zoom={config.map.defaultZoom} 
        className="map"
        zoomControl={false}
        minZoom={config.map.minZoom}
        maxZoom={config.map.maxZoom}
      >
        <TileLayer 
          url={config.map.tileUrl || "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
          attribution={config.map.attribution || '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}
        />
        
        {/* Utiliser le nouveau composant de cluster au lieu des marqueurs individuels */}
        <MarkerClusterGroup items={filteredItems} />
        
        {/* Ajouter les contrôles personnalisés */}
        <MapControls />
      </MapContainer>
    </div>
  );
}