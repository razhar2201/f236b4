export async function fetchGraphData() {
  const response = await fetch('http://localhost:3001/api/v1/123/actions/blueprints/456/graph');
  
  if (!response.ok) {
    throw new Error('Failed to fetch graph data');
  }

  return response.json();
}

