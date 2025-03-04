// app/data/sampleItems.ts
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
      coordinates: [138.7274, 35.3606] // [longitude, latitude]
    },
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/1024px-Tsunami_by_hokusai_19th_century.jpg",
    thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/300px-Tsunami_by_hokusai_19th_century.jpg"
  },
  {
    id: "2",
    title: "Vue du mont Fuji depuis le lac Kawaguchi",
    artist: "Hokusai",
    date: "1830",
    period: "Edo",
    latitude: 35.5171,
    longitude: 138.7559,
    location: {
      name: "Lac Kawaguchi, Japon",
      coordinates: [138.7559, 35.5171] // [longitude, latitude]
    },
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Red_Fuji_southern_wind_clear_morning.jpg/1024px-Red_Fuji_southern_wind_clear_morning.jpg",
    thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Red_Fuji_southern_wind_clear_morning.jpg/300px-Red_Fuji_southern_wind_clear_morning.jpg"
  },
  {
    id: "3",
    title: "Pluie soudaine sur le pont Shin-Ohashi",
    artist: "Hiroshige",
    date: "1857",
    period: "Edo",
    latitude: 35.6895,
    longitude: 139.6917,
    location: {
      name: "Tokyo, Japon",
      coordinates: [139.6917, 35.6895] // [longitude, latitude]
    },
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Sudden_Shower_over_Shin-%C5%8Chashi_bridge_and_Atake.jpg",
    thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Sudden_Shower_over_Shin-%C5%8Chashi_bridge_and_Atake.jpg/300px-Sudden_Shower_over_Shin-%C5%8Chashi_bridge_and_Atake.jpg"
  },
  {
    id: "4",
    title: "Le pont Ryōgoku et la rive de la Sumida",
    artist: "Hiroshige",
    date: "1847",
    period: "Edo",
    latitude: 35.6962,
    longitude: 139.7976,
    location: {
      name: "Rivière Sumida, Tokyo, Japon",
      coordinates: [139.7976, 35.6962] // [longitude, latitude]
    },
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Hiroshige_II_The_Ryogoku_Bridge_and_the_great_riverbank.jpg/1024px-Hiroshige_II_The_Ryogoku_Bridge_and_the_great_riverbank.jpg",
    thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Hiroshige_II_The_Ryogoku_Bridge_and_the_great_riverbank.jpg/300px-Hiroshige_II_The_Ryogoku_Bridge_and_the_great_riverbank.jpg"
  },
  {
    id: "5",
    title: "Acteur Ichikawa Danjûrô",
    artist: "Utamaro",
    date: "1798",
    period: "Edo",
    latitude: 35.7090,
    longitude: 139.7320,
    location: {
      name: "Théâtre Kabuki, Tokyo, Japon",
      coordinates: [139.7320, 35.7090] // [longitude, latitude]
    },
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Utamaro_Ichikawa_Danjo_V.jpg/789px-Utamaro_Ichikawa_Danjo_V.jpg",
    thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Utamaro_Ichikawa_Danjo_V.jpg/300px-Utamaro_Ichikawa_Danjo_V.jpg"
  },
  {
    id: "6",
    title: "Vue du jardin Kameido Tenjin",
    artist: "Hiroshige",
    date: "1856",
    period: "Edo",
    latitude: 35.7013,
    longitude: 139.8269,
    location: {
      name: "Sanctuaire Kameido Tenjin, Tokyo, Japon",
      coordinates: [139.8269, 35.7013] // [longitude, latitude]
    },
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hiroshige_Wisteria_at_Kameido_Tenjin_Shrine.jpg/1024px-Hiroshige_Wisteria_at_Kameido_Tenjin_Shrine.jpg",
    thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hiroshige_Wisteria_at_Kameido_Tenjin_Shrine.jpg/300px-Hiroshige_Wisteria_at_Kameido_Tenjin_Shrine.jpg"
  },
  {
    id: "7",
    title: "Flânant autour d'un saule",
    artist: "Eisen",
    date: "1820",
    period: "Edo",
    latitude: 35.6752,
    longitude: 139.7692,
    location: {
      name: "Yoshiwara, Tokyo, Japon",
      coordinates: [139.7692, 35.6752] // [longitude, latitude]
    },
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Keisai_Eisen_-_Strolling_around_a_Willow_-_Google_Art_Project.jpg/800px-Keisai_Eisen_-_Strolling_around_a_Willow_-_Google_Art_Project.jpg",
    thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Keisai_Eisen_-_Strolling_around_a_Willow_-_Google_Art_Project.jpg/300px-Keisai_Eisen_-_Strolling_around_a_Willow_-_Google_Art_Project.jpg"
  }
];