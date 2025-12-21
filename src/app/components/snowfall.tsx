// components/SnowfallEffect.jsx
"use client";

import React from 'react';
import Snowfall from 'react-snowfall';

const SnowfallEffect = () => {
  // Apply styles to cover the whole screen
  const style = {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    zIndex: 50, // Ensure snow is above other content
    pointerEvents: 'none', // Allows clicks to pass through the snow overlay
  };

  return (
    <div>
      <Snowfall
        // Optional configurations:
        // color="red"
        snowflakeCount={200}
        // images={...} // Use custom images instead of circles
      />
    </div>
  );
};

export default SnowfallEffect;
