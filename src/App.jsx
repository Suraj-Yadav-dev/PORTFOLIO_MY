
import React from "react";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";
import Header from "./components/header/header";  // ✅ Fixed case
import Intro from "./components/intro/intro";      // ✅ Make sure file is Intro.jsx

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
