import { useState } from "react";
// Import styles
import "./styles/app.scss";
// Components
import AboutSection from "./components/AboutSection";
import MyExpSection from "./components/MyExpSection";
import MyWorkSection from "./components/MyWorkSection";
// Import project data
import data from "./data";

function App() {
  // State
  const [projects, setProjects] = useState(data());

  return (
    <div className="App">
      <div className="thin-bar"></div>
      <AboutSection />
      <MyExpSection />
      <MyWorkSection projects={projects} />
    </div>
  );
}

export default App;
