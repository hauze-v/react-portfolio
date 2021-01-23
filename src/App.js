// Import styles
import "./styles/app.scss";
// Components
import AboutSection from "./components/AboutSection";
import MyExpSection from "./components/MyExpSection";

function App() {
  return (
    <div className="App">
      <div className="thin-bar"></div>
      <AboutSection />
      <MyExpSection />
    </div>
  );
}

export default App;
