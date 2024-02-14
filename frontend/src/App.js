import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./Components/Navbar";
import Appfooter from "./Components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <C1 />
      </div>
    </Router>
  );
}

export default App;
