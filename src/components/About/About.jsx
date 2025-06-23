import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="bg-white text-black py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 leading-tight">
            Hi, I am
          </h1>

          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Lakshmi Mounika Veerapaneni
          </h2>

          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 leading-tight text-[#8245ec]">
            I am a{' '}
            <span className="text-[#a855f7]">
              <ReactTypingEffect
                text={['Python Developer', 'DevOps Engineer', 'System Engineer']}
                speed={80}
                eraseSpeed={40}
                typingDelay={500}
                eraseDelay={1800}
                cursorRenderer={(cursor) => (
                  <span className="text-[#a855f7]">{cursor}</span>
                )}
              />
            </span>
          </h3>

          <p className="text-base text-gray-700 mt-8 mb-10 leading-relaxed text-justify tracking-wide">
            I'm a DevOps Engineer with 3+ years of experience designing robust CI/CD pipelines using Jenkins, GitLab CI/CD, and CircleCI. I specialize in Docker & Kubernetes-based containerization for scalable deployments. My Git expertise ensures seamless team collaboration. My focus is on delivering secure, automated, and resilient infrastructure.
          </p>

          <a
            href="https://drive.google.com/file/d/1OtdgcdUEs84VHMZA-Lzhi4smZDN_CZSz/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-base font-semibold transition duration-300 bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-purple-700 hover:to-fuchsia-600 shadow-md"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 4px #a855f7, 0 0 30px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            className="relative group"
          >
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full p-1 bg-black group-hover:scale-105 transition-transform duration-300 ease-in-out shadow-[0_0_20px_5px_rgba(130,69,236,0.6)]">
              <div className="absolute inset-0 z-0 rounded-full animate-pulse bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-pink-500 blur-lg opacity-70 group-hover:opacity-100 transition-all duration-500"></div>
              <img
                src={profileImage}
                alt="Lakshmi Mounika"
                className="relative z-10 w-full h-full rounded-full object-cover border-[5px] border-black"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
