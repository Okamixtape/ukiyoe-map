"use client";
// app/page.tsx
import { useState, useEffect } from "react";
import ClientOnly from "@/components/ClientOnly";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Map from "@/components/map/Map";
import ArtworkDetail from "@/components/artwork/ArtworkDetail";
import { useMapContext } from "@/context/MapContext";

export default function Home() {
  const { selectedItem, setSelectedItem } = useMapContext();
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  
  // Ouvrir le détail quand un élément est sélectionné
  useEffect(() => {
    if (selectedItem) {
      setIsDetailOpen(true);
    }
  }, [selectedItem]);
  
  // Fermer le détail
  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    
    // Optionnel: désélectionner l'élément après un court délai
    // pour permettre à l'animation de fermeture de se terminer
    setTimeout(() => {
      setSelectedItem(null);
    }, 300);
  };

  return (
    <div className="container">
      <Header />
      <main>
        <Sidebar />
        <ClientOnly>
          <Map />
        </ClientOnly>
        
        {/* Overlay qui apparaît derrière le détail */}
        {isDetailOpen && selectedItem && (
          <div 
            className={`artwork-detail-overlay ${isDetailOpen ? 'fade-in' : 'fade-out'}`}
            onClick={handleCloseDetail}
          />
        )}
        
        {/* Composant de détail */}
        <ArtworkDetail 
          item={selectedItem} 
          onClose={handleCloseDetail}
          isOpen={isDetailOpen}
        />
      </main>
    </div>
  );
}