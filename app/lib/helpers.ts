import { UkiyoeItem } from '../types/UkiyoeItem';

/**
 * Filter ukiyoe items by artist
 */
export function filterByArtist(items: UkiyoeItem[], artist: string): UkiyoeItem[] {
  if (!artist) return items;
  return items.filter(item => 
    item.artist.toLowerCase().includes(artist.toLowerCase())
  );
}

/**
 * Filter ukiyoe items by period
 */
export function filterByPeriod(items: UkiyoeItem[], period: string): UkiyoeItem[] {
  if (!period) return items;
  return items.filter(item => 
    item.period.toLowerCase().includes(period.toLowerCase())
  );
}

/**
 * Format date for display
 */
export function formatDate(dateString: string): string {
  if (!dateString) return 'Date inconnue';
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}
