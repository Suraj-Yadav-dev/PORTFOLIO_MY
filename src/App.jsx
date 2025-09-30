import React from "react";

// Components
  import Header from "./components/header/Header";   // Correct casing
import Intro  from "./components/intro/intro";     // Correct casing
        // Header.jsx
import Topbar from "./components/topbar/Topbar";          // Topbar.jsx
           // Intro.jsx
import Experience from "./components/experience/Experience"; // Experience.jsx
import Portfolio from "./components/portfolio/Portfolio";    // Portfolio.jsx
import Testimonials from "./components/testimonials/Testimonials"; // Testimonials.jsx
import Contact from "./components/contact/Contact";       // Contact.jsx
import Footer from "./components/footer/Footer";          // Footer.jsx

const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
