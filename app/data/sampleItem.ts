import { UkiyoeItem } from '@/types/UkiyoeItem';

export const sampleItems: UkiyoeItem[] = [
  {
    id: "1",
    title: "La Grande Vague de Kanagawa",
    artist: "Hokusai",
    date: "1831",
    period: "Edo",
    latitude: 35.3606,
    longitude: 138.7274,
    location: {
      name: "Mont Fuji, Japon",
      coordinates: [138.7274, 35.3606]
    },
    imageUrl: "/images/great-wave.jpg",
    thumbnailUrl: "/images/great-wave-thumb.jpg"
  },
  {
    id: "2",
    title: "Pluie soudaine sur le pont Shin-Ohashi",
    artist: "Hiroshige",
    date: "1857",
    period: "Edo",
    latitude: 35.6895,
    longitude: 139.6917,
    location: {
      name: "Tokyo, Japon",
      coordinates: [139.6917, 35.6895]
    },
    imageUrl: "/images/sudden-rain.jpg",
    thumbnailUrl: "/images/sudden-rain-thumb.jpg"
  }
];