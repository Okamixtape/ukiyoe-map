"use client";
// app/features/map/components/MapMarker.tsx
import React, { useRef, useEffect } from 'react';
import { Marker, Popup } from 'react-leaflet';
import Image from 'next/image';
import { UkiyoeItem } from '@/types/UkiyoeItem';
import { useMapContext } from '@/context/MapContext';
import { formatDate } from '@/lib/helpers';
import L from 'leaflet';

type MapMarkerProps = {
  item: UkiyoeItem;
};

const MapMarker: React.FC<MapMarkerProps> = ({ item }) => {
  const { setSelectedItem, selectedItem } = useMapContext();
  const markerRef = useRef<L.Marker>(null);
  
  // Vérifier si ce marqueur est actuellement sélectionné
  const isSelected = selectedItem?.id === item.id;
  
  // Appliquer des styles spéciaux aux marqueurs sélectionnés
  useEffect(() => {
    if (!markerRef.current) return;
    
    const markerElement = markerRef.current.getElement();
    
    if (isSelected && markerElement) {
      markerElement.classList.add('selected-marker');
      markerRef.current.openPopup();
    } else if (markerElement) {
      markerElement.classList.remove('selected-marker');
    }
  }, [isSelected]);
  
  // Ouvrir le détail complet de l'œuvre
  const handleViewDetails = (e: React.MouseEvent) => {
    e.preventDefault(); // Empêcher le comportement par défaut
    setSelectedItem(item);
  };
  
  // Créer une icône personnalisée pour le marqueur
  const customIcon = L.divIcon({
    className: `custom-marker ${isSelected ? 'selected-marker' : ''}`,
    html: `<div class="marker" style="background-color: ${getMarkerColor(item.period)}"></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });
  
  return (
    <Marker 
      position={[item.location.coordinates[1], item.location.coordinates[0]]} 
      ref={markerRef}
      icon={customIcon}
      eventHandlers={{
        click: () => {
          console.log(`Marker clicked: ${item.title}`);
        },
      }}
    >
      <Popup>
        <div className="marker-popup">
          <h3>{item.title}</h3>
          <p>Artiste: {item.artist}</p>
          <p>Date: {formatDate(item.date)}</p>
          <p>Période: {item.period}</p>
          {item.thumbnailUrl && (
            <div style={{ position: 'relative', width: 100, height: 100, margin: '8px 0' }}>
              <Image 
                src={item.thumbnailUrl} 
                alt={item.title} 
                fill
                style={{ objectFit: 'cover' }} 
                sizes="100px"
              />
            </div>
          )}
          <button 
            onClick={handleViewDetails}
            className="view-details-btn"
          >
            Voir détails
          </button>
        </div>
      </Popup>
    </Marker>
  );
};

// Fonction pour obtenir une couleur de marqueur basée sur la période
function getMarkerColor(period: string): string {
  switch (period.toLowerCase()) {
    case 'edo':
      return '#2C3E50'; // bleu foncé
    case 'meiji':
      return '#E74C3C'; // rouge
    case 'taisho':
      return '#27AE60'; // vert
    case 'showa':
      return '#F39C12'; // orange
    default:
      return '#2C3E50'; // bleu foncé par défaut
  }
}

export default MapMarker;