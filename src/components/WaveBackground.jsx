// src/components/WaveBackground.jsx
import React, { useEffect, useRef } from 'react';
import wavify from 'wavify';

const WaveBackground = () => {
  const waveRef = useRef();

  useEffect(() => {
    if (!waveRef.current) return;

    const wave = wavify(waveRef.current, {
      height: 30,
      bones: 3,
      amplitude: 40,
      color: '#a855f7',
      speed: 0.25,
    });

    return () => wave.stop();
  }, []);

  return (
    <div
      ref={waveRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

export default WaveBackground;
