import { NextResponse } from 'next/server';
import { fetchGraphData } from '../../../services/api'; // Import utility

export async function GET() {
  try {
    const data = await fetchGraphData();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching graph data:', error);
    return NextResponse.json({ error: 'Error fetching graph data' }, { status: 500 });
  }
}

