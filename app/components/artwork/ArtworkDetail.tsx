"use client";
// app/components/artwork/ArtworkDetail.tsx
import Image from "next/image";
import { UkiyoeItem } from "@/types/UkiyoeItem";
import { formatDate } from "@/lib/helpers";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ArtworkDetailProps {
  item: UkiyoeItem | null;
  onClose: () => void;
  isOpen: boolean;
}

export default function ArtworkDetail({ item, onClose, isOpen }: ArtworkDetailProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Réinitialiser l'état de chargement d'image quand l'élément change
  useEffect(() => {
    setImageLoaded(false);
  }, [item]);
  
  if (!item) return null;

  // Animation variants pour framer-motion
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  
  const detailVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95,
      x: "-50%",
      y: "-50%",
      // Garder le centering horizontal avec x
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      x: "-50%", 
      y: "-50%",
      // Garder le centering horizontal avec x
      transition: { 
        type: "spring", 
        damping: 25, 
        stiffness: 300 
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      x: "-50%",
      y: "-50%",
      // Garder le centering horizontal avec x
      transition: { duration: 0.2 }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay avec animation */}
          <motion.div 
            className="artwork-detail-overlay"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            onClick={onClose}
          />
          
          {/* Détail de l'œuvre avec animation */}
          <motion.div 
            className="artwork-detail"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={detailVariants}
          >
            <div className="artwork-detail-header">
              <h2 className="artwork-detail-title">{item.title}</h2>
              <button 
                onClick={onClose}
                className="artwork-detail-close"
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>
            
            <div className="artwork-detail-image-container">
              {!imageLoaded && (
                <div className="loading-spinner">
                  <div className="spinner"></div>
                </div>
              )}
              
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={600}
                height={400}
                className={`artwork-detail-image ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
                style={{ 
                  transition: 'opacity 0.5s ease-in-out',
                  objectFit: 'contain'
                }}
              />
            </div>
            
            <div className="artwork-detail-info">
              <div className="artwork-detail-info-item">
                <span className="artwork-detail-label">Artiste:</span>
                <span className="artwork-detail-value">{item.artist}</span>
              </div>
              
              <div className="artwork-detail-info-item">
                <span className="artwork-detail-label">Date:</span>
                <span className="artwork-detail-value">{formatDate(item.date)}</span>
              </div>
              
              <div className="artwork-detail-info-item">
                <span className="artwork-detail-label">Période:</span>
                <span className="artwork-detail-value">{item.period}</span>
              </div>
              
              <div className="artwork-detail-info-item">
                <span className="artwork-detail-label">Lieu:</span>
                <span className="artwork-detail-value">{item.location.name}</span>
              </div>
            </div>
            
            <div className="artwork-detail-description">
              <h3 className="artwork-detail-subtitle">Description</h3>
              <p>
                Cette estampe ukiyo-e représente {item.title.toLowerCase()}.
                {item.artist === "Hokusai" && " Katsushika Hokusai est l'un des artistes ukiyo-e les plus célèbres du Japon."}
                {item.artist === "Hiroshige" && " Utagawa Hiroshige est connu pour ses paysages et ses séries des stations de voyage."}
                {item.artist === "Utamaro" && " Kitagawa Utamaro est célèbre pour ses portraits de femmes et ses études de la nature."}
                {item.artist === "Eisen" && " Keisai Eisen est connu pour ses portraits de beautés féminines et ses scènes de voyage."}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}