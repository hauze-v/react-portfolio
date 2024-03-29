import { useState } from "react";
// Components
import AboutSection from "../components/AboutSection";
import MyExpSection from "../components/MyExpSection";
import MyWorkSection from "../components/MyWorkSection";
import TeachingSection from "../components/TeachingSection";
import HireMeSection from "../components/HireMeSection";
import FooterSection from "../components/FooterSection";
// Import project data
import data from "../data";

const Home = () => {
  // State
  const [projects] = useState(data());

  return (
    <div className="home">
      <div className="thin-bar"></div>
      <AboutSection />
      <MyExpSection />
      <MyWorkSection projects={projects} />
      <TeachingSection />
      <HireMeSection />
      <FooterSection />
    </div>
  );
};

export default Home;
