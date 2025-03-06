// app/config/index.ts
// Configuration consolidée pour l'application

export const config = {
  map: {
    // Configuration initiale de la carte
    defaultCenter: [35.6895, 139.6917] as [number, number], // Tokyo
    defaultZoom: 7,
    minZoom: 5,
    maxZoom: 18,
    // Adresses des tuiles de la carte
    tileUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  },
  
  // Configuration des contrôles de la carte
  controls: {
    zoomPosition: "bottomright" as const,
    showFullscreenControl: true,
    showLayerControl: false
  },
  
  // Configuration des filtres
  filters: {
    categories: ['artist', 'period', 'location'],
    defaultCategory: 'artist',
  },
  
  // Configuration des miniatures
  thumbnail: {
    width: 300,
    height: 200,
    quality: 80,
  }
};

export default config;