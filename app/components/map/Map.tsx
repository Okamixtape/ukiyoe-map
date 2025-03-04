"use client";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import MapMarker from "@/features/map/components/MapMarker";
import { sampleItems } from "@/data/sampleItem";
import { useMapContext } from "@/context/MapContext";
import L from "leaflet";

export default function Map() {
  const { setFilteredItems } = useMapContext();
  
  // Fix Leaflet icon issues with Next.js
  useEffect(() => {
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
  }, []);
  
  // Load sample items on mount
  useEffect(() => {
    setFilteredItems(sampleItems);
  }, [setFilteredItems]);

  return (
    <div className="map-container">
      <MapContainer center={[35.6895, 139.6917]} zoom={5} className="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* Render markers for sample items */}
        {sampleItems.map(item => (
          <MapMarker key={item.id} item={item} />
        ))}
      </MapContainer>
    </div>
  );
}