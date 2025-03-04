"use client";
import { useFilters } from "@/features/filters/hooks/useFilters";
import { sampleItems } from "@/data/sampleItem";

export default function Sidebar() {
  const { artist, period, setArtist, setPeriod, resetFilters } = useFilters({
    initialItems: sampleItems,
  });

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
          <option value="Hokusai">Hokusai</option>
          <option value="Hiroshige">Hiroshige</option>
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
          <option value="Edo">Edo</option>
          <option value="Meiji">Meiji</option>
        </select>
      </div>
      
      <button 
        onClick={resetFilters}
        className="reset-button"
      >
        Réinitialiser les filtres
      </button>
    </aside>
  );
}