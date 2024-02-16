import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./Components/Navbar";
import Appfooter from "./Components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/home";

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <Home/>
        <Appfooter />
      </div>
    </Router>
  );
}

export default App;
