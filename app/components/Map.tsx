"use client"; // Important pour exécuter Leaflet uniquement côté client

import { useState, useEffect } from "react";
import ukiyoeData from "@/data/ukiyoe.json";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { icon } from "leaflet"

const ICON = icon({
  iconUrl: "/marker.png",
  iconSize: [42, 52],
})

export default function Map() {
  const [ukiyoe, setUkiyoe] = useState<{ id: number; title: string; artist: string; year: number; latitude: number; longitude: number; }[]>([]);

  useEffect(() => {
    setUkiyoe(ukiyoeData); // Charger les données JSON dans le state
  }, []);
  
  return (
    <MapContainer
      center={[35.6895, 139.6917]} // Coordonnées de Tokyo
      zoom={5}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {ukiyoe.map((artwork) => (
        <Marker
          key={artwork.id}
          position={[artwork.latitude, artwork.longitude]}
          icon={ICON}
        >
          <Popup>
            <strong>{artwork.title}</strong> <br />
            Artiste : {artwork.artist} <br />
            Année : {artwork.year}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
