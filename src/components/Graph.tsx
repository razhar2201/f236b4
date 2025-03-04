'use client'; // Required for React Flow in Next.js App Router

import React from 'react';
import { ReactFlow, Controls, Background, BackgroundVariant } from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import 'reactflow/dist/style.css';
import { useGraphData } from '@/hooks/useGraphData';

const Graph = () => {
  const { nodes, edges, loading } = useGraphData();

  console.log("nodes", nodes);
  
  if (loading) return <p>Loading Graph...</p>;

  // Format nodes to ensure they have the correct structure
  const formattedNodes = nodes.map((node: any) => ({
    ...node,
    data: { label: node.data.name }, // Map "name" to "label"
  }));
  
  // Add required IDs to edges if they're missing
  const formattedEdges = edges.map((edge: any, index: number) => ({
    ...edge,
    id: edge.id || `e${index}`, // Generate ID if missing
  }));

  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <ReactFlow 
        nodes={formattedNodes} 
        edges={formattedEdges} 
        colorMode="light"
      >
        <Controls />
        <Background color="red" variant={BackgroundVariant.Dots} />
      </ReactFlow>
    </div>
  );
};

export default Graph;