import { UkiyoeItem } from '../types/UkiyoeItem';

/**
 * Fetch all ukiyoe items from the data source
 */
export async function fetchUkiyoeItems(): Promise<UkiyoeItem[]> {
  try {
    const response = await fetch('/api/ukiyoe');
    if (!response.ok) {
      throw new Error('Failed to fetch ukiyoe data');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching ukiyoe data:', error);
    return [];
  }
}

/**
 * Fetch a single ukiyoe item by ID
 */
export async function fetchUkiyoeItemById(id: string): Promise<UkiyoeItem | null> {
  try {
    const response = await fetch(`/api/ukiyoe/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ukiyoe item with id ${id}`);
    }
    return response.json();
  } catch (error) {
    console.error(`Error fetching ukiyoe item with id ${id}:`, error);
    return null;
  }
}
