"use client";

import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import Image from 'next/image';
import { UkiyoeItem } from '@/types/UkiyoeItem';
import { useMapContext } from '@/context/MapContext';
import { formatDate } from '@/lib/helpers';

type MapMarkerProps = {
  item: UkiyoeItem;
};

const MapMarker: React.FC<MapMarkerProps> = ({ item }) => {
  const { setSelectedItem } = useMapContext();
  
  // Create a custom marker icon if needed
  // const customIcon = new Icon({...});
  
  return (
    <Marker 
      position={[item.location.coordinates[1], item.location.coordinates[0]]} 
      eventHandlers={{
        click: () => {
          setSelectedItem(item);
        },
      }}
      // icon={customIcon}
    >
      <Popup>
        <div className="marker-popup">
          <h3>{item.title}</h3>
          <p>Artiste: {item.artist}</p>
          <p>Date: {formatDate(item.date)}</p>
          <p>Période: {item.period}</p>
          {item.thumbnailUrl && (
            <div style={{ position: 'relative', width: 100, height: 100 }}>
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
            onClick={() => setSelectedItem(item)}
            className="view-details-btn"
          >
            Voir détails
          </button>
        </div>
      </Popup>
    </Marker>
  );
};

export default MapMarker;
