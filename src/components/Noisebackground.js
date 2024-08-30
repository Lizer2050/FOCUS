import React from 'react';

export default function Noisebackground() {
  return (
    <div className="flex h-screen bg-orange-200	 absolute inset-0 z-0">
      <svg width="0" height="0">
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="3.5" 
            stitchTiles="stitch" />
          <feColorMatrix 
            in="colorNoise" 
            type="matrix" 
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0 " />
          <feComposite 
            operator="in" 
            in2="SourceGraphic" 
            result="monoNoise" />
          <feBlend 
            in="SourceGraphic" 
            in2="monoNoise" 
            mode="screen" />
        </filter>
      </svg>
      <div 
        className="w-full h-full bg-orange-300" 
        style={{ filter: "url(#noiseFilter)" }}>
        {/* <p className="text-white text-center mt-28">Noisy Box</p> */}
      </div>
    </div>
  );
}
