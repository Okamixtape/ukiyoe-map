"use client";

import { useState, useEffect } from 'react';
import { useMapContext } from '../../../context/MapContext';

export function useMapItems() {
  const { filteredItems, selectedItem } = useMapContext();
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    setLoading(false);
  }, [filteredItems]);
  
  return {
    items: filteredItems,
    selectedItem,
    loading
  };
}
