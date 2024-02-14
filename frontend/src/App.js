import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./Components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
// import C1 from "./Components/C1";

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
      </div>
    </Router>
  );
}

export default App;
