import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./Components/Navbar";
<<<<<<< HEAD
<<<<<<< HEAD
import Appfooter from "./Components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);
<<<<<<< HEAD
=======
import { BrowserRouter as Router } from "react-router-dom";
import C1 from "./Components/C1";
>>>>>>> parent of f59762f (Merge branch 'draft' of https://github.com/Pj-develop/Hirez into draft)
=======
import { BrowserRouter as Router } from "react-router-dom";
import C1 from "./Components/C1";
>>>>>>> parent of f59762f (Merge branch 'draft' of https://github.com/Pj-develop/Hirez into draft)

=======
>>>>>>> 6bf7bf637b80459b5ac810adf42b243b5927cdc0
function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <Home/>
=======
        <Home />
>>>>>>> 6bf7bf637b80459b5ac810adf42b243b5927cdc0
        <Appfooter />
=======
        <C1 />
>>>>>>> parent of f59762f (Merge branch 'draft' of https://github.com/Pj-develop/Hirez into draft)
=======
        <C1 />
>>>>>>> parent of f59762f (Merge branch 'draft' of https://github.com/Pj-develop/Hirez into draft)
      </div>
    </Router>
  );
}

export default App;
