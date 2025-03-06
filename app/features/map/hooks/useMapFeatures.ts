"use client";
// app/features/map/hooks/useMapFeatures.ts
import { useEffect, useRef, useState } from 'react';
import { useMapContext } from '@/context/MapContext';
import { UkiyoeItem } from '@/types/UkiyoeItem';
import { Map as LeafletMap } from 'leaflet';

export function useMapFeatures() {
  const { selectedItem } = useMapContext(); // Ne pas déstructurer setSelectedItem si on ne l'utilise pas
  const mapRef = useRef<LeafletMap | null>(null);
  const [isMapReady, setIsMapReady] = useState(false);
  
  // Configurer la référence de la carte
  const setMapRef = (map: LeafletMap) => {
    mapRef.current = map;
    setIsMapReady(true);
  };
  
  // Fonction pour voler vers un point spécifique sur la carte
  const flyToLocation = (item: UkiyoeItem) => {
    if (!mapRef.current) return;
    
    mapRef.current.flyTo(
      [item.location.coordinates[1], item.location.coordinates[0]],
      12, // niveau de zoom
      { duration: 1.5 } // durée de l'animation en secondes
    );
  };
  
  // Voler vers l'élément sélectionné quand il change
  useEffect(() => {
    if (selectedItem && mapRef.current) {
      flyToLocation(selectedItem);
    }
  }, [selectedItem]);
  
  return {
    setMapRef,
    flyToLocation,
    isMapReady
  };
}

export default useMapFeatures;