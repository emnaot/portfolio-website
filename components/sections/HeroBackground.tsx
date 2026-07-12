"use client";

import { motion } from "framer-motion";

// Fixed seed random function to ensure consistent results on server and client
function seededRandom(seed: number) {
  let value = seed;
  return function () {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

const NODES = 30;
const NODE_SIZE = 3;
const CONNECTION_DISTANCE = 25; // Normalized distance (0-100)

export function HeroBackground() {
  const random = seededRandom(42); // Fixed seed
  // Generate nodes with consistent random positions
  const nodes: { id: number; x: number; y: number }[] = [];
  for (let i = 0; i < NODES; i++) {
    nodes.push({
      id: i,
      x: random() * 100,
      y: random() * 100,
    });
  }

  // Generate connections between nearby nodes
  const connections: { x1: number; y1: number; x2: number; y2: number }[] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < CONNECTION_DISTANCE) {
        connections.push({
          x1: nodes[i].x,
          y1: nodes[i].y,
          x2: nodes[j].x,
          y2: nodes[j].y,
        });
      }
    }
  }

  return (
    <div className="hero-network" aria-hidden="true">
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(111,83,144,0.8)" />
            <stop offset="100%" stopColor="rgba(111,83,144,0)" />
          </radialGradient>
        </defs>
        {connections.map((conn, index) => (
          <line
            key={index}
            x1={`${conn.x1}%`}
            y1={`${conn.y1}%`}
            x2={`${conn.x2}%`}
            y2={`${conn.y2}%`}
            stroke="rgba(111,83,144,0.2)"
            strokeWidth="1"
          />
        ))}
        {nodes.map((node, index) => (
          <motion.circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r={NODE_SIZE}
            fill="url(#nodeGradient)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 0.4 + index * 0.02, // Consistent opacity based on index
              scale: 0.7 + index * 0.01, // Consistent scale based on index
            }}
            transition={{
              duration: 2 + index * 0.05,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.03,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
