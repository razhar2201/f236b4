import { useState, useEffect } from 'react';

interface Node {
  id: string;
  position?: { x: number; y: number };
  type: string;
  data: any;
}

interface Edge {
  id: string;
  source: string;
  target: string;
}

export function useGraphData() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/graph'); // Calls Next.js API
        const data = await response.json();
        
        setNodes(data.nodes || []);
        setEdges(data.edges || []);
      } catch (error) {
        console.error('Error fetching graph data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { nodes, edges, loading };
}
