import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { UkiyoeItem } from '../../../types/UkiyoeItem';

// GET handler for fetching a specific ukiyoe item by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    // Read the ukiyoe data from the JSON file
    const filePath = path.join(process.cwd(), 'data', 'ukiyoe.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data: UkiyoeItem[] = JSON.parse(fileContents);
    
    // Find the specific item by ID
    const item = data.find(item => item.id === id);
    
    if (!item) {
      return NextResponse.json(
        { error: `Ukiyoe item with ID ${id} not found` },
        { status: 404 }
      );
    }
    
    // Return the item as JSON
    return NextResponse.json(item);
  } catch (error) {
    console.error(`Error fetching ukiyoe item:`, error);
    return NextResponse.json(
      { error: 'Failed to fetch ukiyoe item' },
      { status: 500 }
    );
  }
}
