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
  const [Id, setId] = useState(""); // Renamed from Id

  useEffect(() => {
    const data = localStorage.getItem("HirizloginInfo");
    if (data) {
      const { email, token, accountType, Id } = JSON.parse(data);
      if (token) {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp < currentTime) {
          localStorage.removeItem("HirizloginInfo");
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
          setEmail(email);
          setAccountType(accountType);
        }
        if (Id) {
          setId(Id); // Set Id to CompanyId state
          console.log(`/api/vacancy/company/${Id}`);
        }
      } else {
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("HirizloginInfo");
    setIsAuthenticated(false);
    setEmail("");
    setAccountType("");
    setId(""); // Clear CompanyId when logging out
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
          <Route path="/find" element={<FindJobs api="/api/vacancy" />} />
          <Route
            path="/vacancies"
            element={
              <FindJobs
                accountType={accountType}
                Id={Id}
                api={`/api/vacancy/company/${Id}`}
              />
            }
          />
          <Route path="/create/vacancy" element={<VacancyForm />} />
          <Route
            path="/vacancyDetails/:vacancyId"
            element={<VacancyDetails />}
          />
          <Route path="/candidates/:vacancyId" element={<VacancyDetails />} />
          {!isAuthenticated && (
            <>
              <Route path="/company/signup" element={<SignupCompany />} />
              <Route path="/user/signup" element={<SignupUser />} />
              <Route path="/login" element={<Login />} />
            </>
          )}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
