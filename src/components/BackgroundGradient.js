"use client"
import { useEffect, useState } from 'react';

export default function BackgroundGradient() {
  useEffect(() => {
    let t = 0;
    
    const moveGradient = () => {
      const x = 50 + 30 * Math.sin(t); // Sinusoidal movement for X
      const y = 50 + 30 * Math.cos(t); // Cosine movement for Y
      document.body.style.transition = "background-position 0.1s linear"; // Smooth transition
      document.body.style.backgroundPosition = `${x}% ${y}%`;
      t += 0.05; // Controls the speed of movement
    };

    const interval = setInterval(moveGradient, 50); // Smooth frequent updates
    return () => clearInterval(interval); // Cleanup when component unmounts
  }, []);

  return <></>;
}
