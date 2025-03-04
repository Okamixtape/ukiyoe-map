"use client";

import React, { useState, useEffect } from 'react';
import { UkiyoeItem } from '../../../types/UkiyoeItem';
import { useMapContext } from '../../../context/MapContext';
import { filterByArtist, filterByPeriod } from '../../../lib/helpers';
import { fetchUkiyoeItems } from '../../../lib/api';

const FilterPanel: React.FC = () => {
  const [items, setItems] = useState<UkiyoeItem[]>([]);
  const [artists, setArtists] = useState<string[]>([]);
  const [periods, setPeriods] = useState<string[]>([]);
  const [selectedArtist, setSelectedArtist] = useState<string>('');
  const [selectedPeriod, setSelectedPeriod] = useState<string>('');
  const { setFilteredItems } = useMapContext();
  
  // Fetch ukiyoe items and extract unique artists and periods
  useEffect(() => {
    const loadItems = async () => {
      const data = await fetchUkiyoeItems();
      setItems(data);
      setFilteredItems(data);
      
      // Extract unique artists
      const uniqueArtists = Array.from(new Set(data.map(item => item.artist)));
      setArtists(uniqueArtists);
      
      // Extract unique periods
      const uniquePeriods = Array.from(new Set(data.map(item => item.period)));
      setPeriods(uniquePeriods);
    };
    
    loadItems();
  }, [setFilteredItems]);
  
  // Apply filters when selection changes
  useEffect(() => {
    let filtered = items;
    
    if (selectedArtist) {
      filtered = filterByArtist(filtered, selectedArtist);
    }
    
    if (selectedPeriod) {
      filtered = filterByPeriod(filtered, selectedPeriod);
    }
    
    setFilteredItems(filtered);
  }, [selectedArtist, selectedPeriod, items, setFilteredItems]);
  
  return (
    <div className="filter-panel">
      <h2>Filtres</h2>
      
      <div className="filter-group">
        <label htmlFor="artist-filter">Artiste:</label>
        <select 
          id="artist-filter" 
          value={selectedArtist} 
          onChange={(e) => setSelectedArtist(e.target.value)}
        >
          <option value="">Tous les artistes</option>
          {artists.map(artist => (
            <option key={artist} value={artist}>
              {artist}
            </option>
          ))}
        </select>
      </div>
      
      <div className="filter-group">
        <label htmlFor="period-filter">Période:</label>
        <select 
          id="period-filter" 
          value={selectedPeriod} 
          onChange={(e) => setSelectedPeriod(e.target.value)}
        >
          <option value="">Toutes les périodes</option>
          {periods.map(period => (
            <option key={period} value={period}>
              {period}
            </option>
          ))}
        </select>
      </div>
      
      <button 
        onClick={() => {
          setSelectedArtist('');
          setSelectedPeriod('');
        }}
        className="reset-filters-btn"
      >
        Réinitialiser les filtres
      </button>
    </div>
  );
};

export default FilterPanel;
