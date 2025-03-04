"use client";

import { useState, useEffect, useCallback } from 'react';
import { UkiyoeItem } from '../../../types/UkiyoeItem';
import { useMapContext } from '../../../context/MapContext';
import { filterByArtist, filterByPeriod } from '../../../lib/helpers';

type UseFiltersOptions = {
  initialItems?: UkiyoeItem[];
};

export function useFilters({ initialItems = [] }: UseFiltersOptions = {}) {
  const [items, setItems] = useState<UkiyoeItem[]>(initialItems);
  const [artist, setArtist] = useState<string>('');
  const [period, setPeriod] = useState<string>('');
  const { setFilteredItems } = useMapContext();
  
  // Update items if initialItems changes
  useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);
  
  // Apply filters when selection changes
  useEffect(() => {
    let filtered = items;
    
    if (artist) {
      filtered = filterByArtist(filtered, artist);
    }
    
    if (period) {
      filtered = filterByPeriod(filtered, period);
    }
    
    setFilteredItems(filtered);
  }, [artist, period, items, setFilteredItems]);
  
  const resetFilters = useCallback(() => {
    setArtist('');
    setPeriod('');
  }, []);
  
  return {
    artist,
    period,
    setArtist,
    setPeriod,
    resetFilters
  };
}
