import { useState } from "react";
// Components
import AboutSection from "../components/AboutSection";
import MyExpSection from "../components/MyExpSection";
import MyWorkSection from "../components/MyWorkSection";
// Import project data
import data from "../data";
// Router
import { Route } from "react-router-dom";

const Home = () => {
  // State
  const [projects] = useState(data());

  return (
    <div className="home">
      <div className="thin-bar"></div>
      <AboutSection />
      <MyExpSection />
      <MyWorkSection projects={projects} />
    </div>
  );
};

export default Home;
