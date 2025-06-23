import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Certifications from "./components/Certifications/Certification";
import Footer from "./components/Footer/Footer";
import PageWrapper from "./components/PageWrapper";
 // This is your name screen

const FullPortfolio = () => (
  <PageWrapper>
    <Navbar />
    <About />
    <Skills />
    <Experience />
    <Work />
    <Education />
    <Certifications />
    <Contact />
    <Footer />
  </PageWrapper>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<FullPortfolio />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
