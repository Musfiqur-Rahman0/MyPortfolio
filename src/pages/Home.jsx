import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MySkills from "../components/MySkills";
import AboutMe from "../components/AboutMe";
import Testimonials from "../components/Testimonials";
import Projects from "../components/Projects";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";

const Home = () => {
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }, []);

  return (
    <div className="overflow-x-hidden flex flex-col gap-5 sm:gap-10 relative">
      <Navbar />
      <Hero />
      <MySkills />
      <Projects />
      <AboutMe />
      <Testimonials />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Home;
