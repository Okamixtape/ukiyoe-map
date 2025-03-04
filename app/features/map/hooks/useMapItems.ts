"use client";

import { useState, useEffect } from 'react';
import { UkiyoeItem } from '../../../types/UkiyoeItem';
import { useMapContext } from '../../../context/MapContext';

export function useMapItems() {
  const { filteredItems, selectedItem } = useMapContext();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    setLoading(false);
  }, [filteredItems]);
  
  return {
    items: filteredItems,
    selectedItem,
    loading,
    error
  };
}
