import React, { useEffect, useRef } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min'; // Import the specific Vanta effect

function VantaBirds() {
  const vantaRef = useRef(null);

  useEffect(() => {
    // Initialize Vanta effect
    const effect = BIRDS({
      el: vantaRef.current,
      // Additional options for the effect can be provided here
    });

    // Cleanup: Destroy the effect when the component unmounts
    return () => {
      effect.destroy();
    };
  }, []);

  return <div ref={vantaRef} style={{ width: '100%', height: '100vh' }} />;
}

export default VantaBirds;