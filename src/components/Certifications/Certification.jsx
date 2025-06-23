import React from "react";
import certifications from "../../data/certificationsData.js";

const Certification = () => {
  return (
    <section
      className="px-6 py-10 text-center bg-white dark:bg-black"
      id="certifications"
    >
      <h2 className="text-3xl font-bold mb-10 text-gray-800 dark:text-white">
        Certifications
      </h2>

      {/* Wrapper to center cards */}
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="w-[280px] border rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 bg-gray-50 dark:bg-gray-900"
            >
              {cert.logo && (
                <img
                  src={cert.logo}
                  alt={`${cert.title} logo`}
                  className="w-12 h-12 mx-auto mb-4 transition-transform duration-300 hover:scale-110"
                />
              )}
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                {cert.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{cert.issuer}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {cert.date}
              </p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline text-sm mt-2 inline-block"
                >
                  View Credential
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
