// src/components/Intro.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import noise from "../assets/noise.png"; // Adjust if path is different

const Intro = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-tr from-[#c2d4f5] via-[#d9d4f0] to-[#f5d4ec] animate-gradient-slow">
      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage: `url(${noise})`,
          backgroundSize: "cover",
        }}
      />

      {/* Glass Panel */}
      <div className="absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-10 rounded-xl shadow-2xl w-[90%] md:w-[60%] text-center">
        <h2 className="text-sm md:text-base uppercase tracking-widest text-gray-700 mb-2">
          Hello, I am
        </h2>

        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 animate-fade-in">
          Lakshmi Mounika Veerapaneni
        </h1>

        <h3 className="text-lg md:text-xl font-light text-gray-700 mb-6 animate-fade-in-delay">
          <Typewriter
            words={["Creative Thinker", "Passionate Developer", "Problem Solver"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h3>

        <button
          onClick={() => navigate("/home")}
          className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-full shadow hover:bg-purple-700 transition"
        >
          View Portfolio
        </button>
      </div>
    </div>
  );
};

export default Intro;
