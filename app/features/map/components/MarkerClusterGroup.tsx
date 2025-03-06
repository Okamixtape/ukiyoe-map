"use client";
// app/features/map/components/MarkerClusterGroup.tsx
import React, { useEffect } from 'react';
import { UkiyoeItem } from '@/types/UkiyoeItem';
import L from 'leaflet';
import { useMap } from 'react-leaflet';
import 'leaflet.markercluster/dist/leaflet.markercluster.js';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
// Ne pas importer MapMarker car nous ne l'utilisons pas ici

// Define an extended Layer interface that includes the _markerCluster property
interface MarkerClusterLayer extends L.Layer {
  _markerCluster?: boolean;
}

// Définir des styles personnalisés pour les clusters
const createClusterCustomIcon = function (cluster: L.MarkerCluster) {
  const count = cluster.getChildCount();
  let size = 'small';
  
  if (count > 10) {
    size = 'medium';
  }
  if (count > 20) {
    size = 'large';
  }
  
  return L.divIcon({
    html: `<div class="cluster-icon cluster-${size}">${count}</div>`,
    className: `marker-cluster marker-cluster-${size}`,
    iconSize: L.point(40, 40)
  });
};

type MarkerClusterGroupProps = {
  items: UkiyoeItem[];
};

const MarkerClusterGroup: React.FC<MarkerClusterGroupProps> = ({ items }) => {
  const map = useMap();
  
  useEffect(() => {
    if (!map) return;
    
    // Nettoyer les anciens clusters
    map.eachLayer((layer) => {
      if ((layer as MarkerClusterLayer)._markerCluster) {
        map.removeLayer(layer);
      }
    });
    
    // Créer un nouveau groupe de clusters
    const markerClusterGroup = L.markerClusterGroup({
      iconCreateFunction: createClusterCustomIcon,
      maxClusterRadius: 50, // Distance maximale pour regrouper les marqueurs
      spiderfyOnMaxZoom: true, // Étendre les marqueurs au zoom maximum
      showCoverageOnHover: true, // Afficher la zone couverte au survol
      zoomToBoundsOnClick: true, // Zoomer sur les limites au clic
      animate: true // Animer les transitions
    });
    
    // Créer une fonction pour obtenir la couleur du marqueur selon la période
    const getMarkerColor = (period: string): string => {
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
    };
    
    // Ajouter chaque marqueur au groupe de clusters
    items.forEach(item => {
      // Créer une icône personnalisée pour le marqueur
      const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `<div class="marker" style="background-color: ${getMarkerColor(item.period)}"></div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });
      
      const marker = L.marker(
        [item.location.coordinates[1], item.location.coordinates[0]],
        { icon: customIcon }
      );
      
      // Créer un popup pour chaque marqueur
      const popupContent = document.createElement('div');
      popupContent.className = 'marker-popup';
      popupContent.innerHTML = `
        <h3>${item.title}</h3>
        <p>Artiste: ${item.artist}</p>
        <p>Période: ${item.period}</p>
      `;
      
      // Ajouter un bouton pour voir les détails
      const detailsButton = document.createElement('button');
      detailsButton.className = 'view-details-btn';
      detailsButton.innerText = 'Voir détails';
      detailsButton.onclick = () => {
        // Déclencher un événement personnalisé que nous écouterons dans Map.tsx
        const event = new CustomEvent('marker-select', { detail: item });
        document.dispatchEvent(event);
      };
      
      popupContent.appendChild(detailsButton);
      marker.bindPopup(popupContent);
      
      markerClusterGroup.addLayer(marker);
    });
    
    // Ajouter le groupe de clusters à la carte
    map.addLayer(markerClusterGroup);
    
    return () => {
      // Nettoyer lors du démontage
      map.removeLayer(markerClusterGroup);
    };
  }, [map, items]);
  
  // Ce composant ne rend rien directement, il gère juste les clusters via les effets
  return null;
};

export default MarkerClusterGroup;