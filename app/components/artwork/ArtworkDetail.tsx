"use client";
// app/components/artwork/ArtworkDetail.tsx
import Image from "next/image";
import { UkiyoeItem } from "@/types/UkiyoeItem";
import { formatDate } from "@/lib/helpers";

interface ArtworkDetailProps {
  item: UkiyoeItem | null;
  onClose: () => void;
  isOpen: boolean;
}

export default function ArtworkDetail({ item, onClose, isOpen }: ArtworkDetailProps) {
  if (!item) return null;

  const detailClasses = isOpen 
    ? "artwork-detail artwork-detail-open" 
    : "artwork-detail artwork-detail-closed";

  return (
    <div className={detailClasses}>
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
        <Image
          src={item.imageUrl}
          alt={item.title}
          width={600}
          height={400}
          className="artwork-detail-image"
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
        </p>
      </div>
    </div>
  );
}