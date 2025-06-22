import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white text-black py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] border-t border-gray-200">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-600">Lakshmi Mounika</h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-600 text-sm sm:text-base my-1 transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          <a
            href="https://www.linkedin.com/in/lakshmi-mounika-veerapaneni"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-gray-700 hover:text-purple-600 transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 mt-6">
          © 2025 Lakshmi Mounika. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
