export const config = {
  map: {
    defaultCenter: [35.6762, 139.6503], // Tokyo
    defaultZoom: 7,
    maxZoom: 18,
    minZoom: 5,
  },
  filters: {
    categories: ['artist', 'period', 'location'],
    defaultCategory: 'artist',
  },
  thumbnail: {
    width: 300,
    height: 200,
    quality: 80,
  }
}
