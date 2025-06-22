// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(1.1)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        gradient: {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
      },
      animation: {
        blob: 'blob 10s infinite',
        zoom: 'zoomIn 8s ease-in-out forwards',
        'fade-in': 'fadeIn 2s ease-out',
        'fade-in-delay': 'fadeIn 3s ease-out',
        gradient: 'gradient 15s ease infinite',
      },
      backgroundSize: {
        '400': '400% 400%',
      },
      backgroundImage: {
        'skills-gradient': 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',
        'noise-pattern': "url('/src/assets/noise.png')", // only if you're using noise overlay
      },
    },
  },
  plugins: [],
};
