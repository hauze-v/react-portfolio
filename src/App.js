// Import styles
import "./styles/app.scss";
import Home from "./pages/Home";
// Router
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path={["/project/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
