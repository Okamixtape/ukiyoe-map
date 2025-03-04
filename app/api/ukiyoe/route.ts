import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// GET handler for fetching all ukiyoe items
export async function GET() {
  try {
    // Read the ukiyoe data from the JSON file
    const filePath = path.join(process.cwd(), 'data', 'ukiyoe.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    
    // Return the data as JSON
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading ukiyoe data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch ukiyoe data' },
      { status: 500 }
    );
  }
}
