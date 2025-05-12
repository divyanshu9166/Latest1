"use client";

import React from 'react';
import ConcentricCircle from '../ui/ConcentricCircle';
// Fix: Change from incorrect import to correct named import
import { Button } from '../ui/button';

// Modified to handle click event internally
const QuerySection = ({ 
  title = "Have A<br />Project<br />In Mind?",
  buttonText = "Let's Talk",
  contactLink = "/contact" // Added contact link prop with default value
}) => {
  // Internal click handler
  const handleClick = () => {
    window.location.href = contactLink;
    console.log('Contact button clicked!');
  };

  return (
    <section className="relative w-full min-h-[50vh] overflow-hidden flex items-center justify-center bg-gradient-to-r from-soft-beige to-light-pink py-20">
      {/* Small black dot in upper left for visual balance */}
      <div className="absolute top-8 left-8 w-2 h-2 bg-black rounded-full"></div>
      
      {/* Concentric circles with rotating animations */}
      <div className="absolute inset-0 flex items-center justify-center">
        <ConcentricCircle 
          size={600} 
          animationClass="animate-rotate-slow" 
          opacity={0.95}
          dots={[
            { angle: 45, color: "#ea384c" }, 
            { angle: 225, color: "#8B5CF6" }
          ]}
        />
        <ConcentricCircle 
          size={480} 
          animationClass="animate-rotate-reverse"
          opacity={0.85}
          dots={[
            { angle: 90, color: "#F97316" }, 
            { angle: 270, color: "#D946EF" }
          ]}
        />
        <ConcentricCircle 
          size={360} 
          animationClass="animate-rotate-medium" 
          opacity={0.8}
          dots={[
            { angle: 0, color: "#33C3F0" }, 
            { angle: 180, color: "#ea384c" }
          ]}
        />
        <ConcentricCircle 
          size={240} 
          animationClass="animate-rotate-fast" 
          opacity={0.75}
          dots={[
            { angle: 60, color: "#8B5CF6" }, 
            { angle: 240, color: "#F97316" }
          ]}
        />
      </div>

      {/* Main text */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        <h2 
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-black tracking-tight leading-tight mb-8"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <Button 
          className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg rounded-full transition-all"
          onClick={handleClick}
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

export default QuerySection;