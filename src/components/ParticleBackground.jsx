// src/components/ParticleBackground.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 z-0"
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "#ffffff", // Clean white background
          },
        },
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: ["#a855f7", "#7c3aed", "#9333ea"], // vibrant purples
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.3,
            random: true,
          },
          size: {
            value: { min: 1, max: 4 },
            random: true,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            outModes: {
              default: "out",
            },
          },
          links: {
            enable: true,
            distance: 120,
            color: "#a855f7",
            opacity: 0.2,
            width: 0.8,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticleBackground;
