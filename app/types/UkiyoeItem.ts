export interface UkiyoeItem {
  id: string;
  title: string;
  artist: string;
  date: string;
  period: string;
  latitude: number;
  longitude: number;
  location: {
    name: string;
    coordinates: [number, number]; // [latitude, longitude]
  };
  imageUrl: string;
  thumbnailUrl?: string;
}

export interface FilterState {
  category: 'artist' | 'period' | 'location';
  value: string | null;
}

export interface MapState {
  center: [number, number];
  zoom: number;
  selectedItem: UkiyoeItem | null;
}
