import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { jwtDecode } from "jwt-decode";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserNavbar from "./Components/UserNavbar";
import CompanyNavbar from "./Components/CompanyNavbar";
import Footer from "./Components/Footer";
import Home from "./pages/home/home";
import FindJobs from "./pages/findJobs/findJobs";
import VacancyForm from "./pages/CreateVacancy/VacancyForm";
import SignupCompany from "./pages/LoginSignup/SignupCompany";
import SignupUser from "./pages/LoginSignup/SignupUser";
import Login from "./pages/LoginSignup/Login";
import VacancyDetails from "./pages/findJobs/VacancyDeatails";
library.add(fab);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [accountType, setAccountType] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("HirizloginInfo");
    if (data) {
      const { email, token, accountType } = JSON.parse(data);
      if (token) {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp < currentTime) {
          localStorage.removeItem("HirizloginInfo");
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
          setEmail(email); // Set email to state
          setAccountType(accountType); // Set accountType to state
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
    setAccountType("");
  };

  return (
    <Router>
      <div className="App">
        {accountType === "company" ? (
          <CompanyNavbar
            isAuthenticated={isAuthenticated}
            email={email}
            onLogout={handleLogout}
          />
        ) : (
          <UserNavbar
            isAuthenticated={isAuthenticated}
            email={email}
            onLogout={handleLogout}
          />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find" element={<FindJobs />} />
          <Route path="/create/vacancy" element={<VacancyForm />} />
          <Route
            path="/vacancyDetails/:vacancyId"
            element={<VacancyDetails />}
          />
          {!isAuthenticated && (
            <>
              <Route path="/company/signup" element={<SignupCompany />} />
              <Route path="/user/signup" element={<SignupUser />} />
              <Route path="/login" element={<Login />} />
            </>
          )}
          {/* Redirect to home for unmatched routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
