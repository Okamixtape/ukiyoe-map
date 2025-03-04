"use client";
// app/components/layout/Sidebar.tsx
import { useEffect, useState } from "react";
import { useFilters } from "@/features/filters/hooks/useFilters";
import { sampleItems } from "@/data/sampleItem";

export default function Sidebar() {
  const { artist, period, setArtist, setPeriod, resetFilters } = useFilters({
    initialItems: sampleItems,
  });
  
  // Extract unique artists and periods for filter options
  const [artists, setArtists] = useState<string[]>([]);
  const [periods, setPeriods] = useState<string[]>([]);
  
  useEffect(() => {
    const uniqueArtists = Array.from(new Set(sampleItems.map(item => item.artist)));
    const uniquePeriods = Array.from(new Set(sampleItems.map(item => item.period)));
    
    setArtists(uniqueArtists);
    setPeriods(uniquePeriods);
  }, []);

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">Filtres</h2>
      </div>
      
      <div className="filter-group">
        <label htmlFor="artist-filter" className="filter-label">
          Filtrer par artiste
        </label>
        <select
          id="artist-filter"
          className="filter-select"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        >
          <option value="">Tous les artistes</option>
          {artists.map(artistName => (
            <option key={artistName} value={artistName}>
              {artistName}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="period-filter" className="filter-label">
          Filtrer par période
        </label>
        <select
          id="period-filter"
          className="filter-select"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        >
          <option value="">Toutes les périodes</option>
          {periods.map(periodName => (
            <option key={periodName} value={periodName}>
              {periodName}
            </option>
          ))}
        </select>
      </div>
      
      <button 
        onClick={resetFilters}
        className="reset-button"
      >
        Réinitialiser les filtres
      </button>
      
      <div className="sidebar-section">
        <h3 className="sidebar-subtitle">À propos</h3>
        <p className="sidebar-text">
          Cette carte interactive présente les lieux représentés dans les célèbres estampes 
          japonaises ukiyo-e. Utilisez les filtres pour explorer les œuvres par artiste ou période.
        </p>
      </div>
    </aside>
  );
}