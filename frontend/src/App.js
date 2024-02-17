import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { jwtDecode } from "jwt-decode";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./Components/Navbar";
// import Appfooter from "./Components/Footer";
import Home from "./pages/home/home";
import FindJobs from "./pages/findJobs/findJobs";
import VacancyForm from "./pages/CreateVacancy/VacancyForm";
import SignupCompany from "./pages/LoginSignup/SignupCompany";
library.add(fab);
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("HirizloginInfo");
    if (data) {
      const { email, token } = JSON.parse(data);
      if (token) {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp < currentTime) {
          localStorage.removeItem("HirizloginInfo");
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
          setEmail(email); // Set email to state
        }
      } else {
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
  }, []);
  const handleLogout = () => {
    // Clear authentication token and update state
    localStorage.removeItem("HirizloginInfo");
    setIsAuthenticated(false);
    setEmail("");
  };
  return (
    <Router>
      <div className="App">
        <AppNavbar
          isAuthenticated={isAuthenticated}
          email={email}
          onLogout={handleLogout}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find" element={<FindJobs />} />
          <Route path="/create/vacancy" element={<VacancyForm />} />

          {!isAuthenticated && (
            <>
              <Route path="/company/signup" element={<SignupCompany />} />
            </>
          )}
        </Routes>

        {/* <Appfooter/> */}
      </div>
    </Router>
  );
}

export default App;
