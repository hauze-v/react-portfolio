// Import styles
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
// Router
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/project/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
