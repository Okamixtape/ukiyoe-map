"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UkiyoeItem } from '../types/UkiyoeItem';

type MapContextType = {
  selectedItem: UkiyoeItem | null;
  filteredItems: UkiyoeItem[];
  setSelectedItem: (item: UkiyoeItem | null) => void;
  setFilteredItems: (items: UkiyoeItem[]) => void;
};

const MapContext = createContext<MapContextType | undefined>(undefined);

export function MapProvider({ children }: { children: ReactNode }) {
  const [selectedItem, setSelectedItem] = useState<UkiyoeItem | null>(null);
  const [filteredItems, setFilteredItems] = useState<UkiyoeItem[]>([]);

  return (
    <MapContext.Provider value={{
      selectedItem,
      filteredItems,
      setSelectedItem,
      setFilteredItems
    }}>
      {children}
    </MapContext.Provider>
  );
}

export function useMapContext() {
  const context = useContext(MapContext);
  if (context === undefined) {
    throw new Error('useMapContext must be used within a MapProvider');
  }
  return context;
}
