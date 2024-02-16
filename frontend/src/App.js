import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./Components/Navbar";
<<<<<<< HEAD
import Appfooter from "./Components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);
=======
import { BrowserRouter as Router } from "react-router-dom";
import C1 from "./Components/C1";
>>>>>>> parent of f59762f (Merge branch 'draft' of https://github.com/Pj-develop/Hirez into draft)

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
<<<<<<< HEAD
        <Home/>
        <Appfooter />
=======
        <C1 />
>>>>>>> parent of f59762f (Merge branch 'draft' of https://github.com/Pj-develop/Hirez into draft)
      </div>
    </Router>
  );
}

export default App;
