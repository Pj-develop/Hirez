import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; // Import the CSS file

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "individual",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate input (client-side)
      if (!validateEmail(formData.email)) {
        setError("Invalid email format");
        throw new Error("Invalid email format");
      }
      if (!formData.password) {
        setError("Password cannot be empty");
        throw new Error("Password cannot be empty");
      }

      // Determine endpoint based on user type
      let endpoint;
      if (formData.userType === "individual") {
        endpoint = "/api/user/login";
      } else if (formData.userType === "company") {
        endpoint = "/api/company/login";
      }

      // Secure communication (HTTPS)
      const response = await axios.post(endpoint, formData, {
        // Authentication and other security headers as needed
      });

      // Handle successful login
      console.log("Login successful:", response.data);
      localStorage.setItem("HirizloginInfo", JSON.stringify(response.data));
      window.location.reload();
    } catch (error) {
      setError("Login failed:", error.message);
      // Display user-friendly error message
    }
  };

  // Client-side validation (example)
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto", backgroundColor:"#009688", borderRadius:"20px"}}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#E0F1E0", fontWeight:"700", fontSize:"3rem" }}>
        Login
      </h2>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Display error message if exists */}
      <form onSubmit={handleSubmit}>
        <label style={{ display: "block",color: "#E0F1E0" }}>
          Select User Type:
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              // border: "1px solid #ccc",
            }}
          >
            <option value="individual">Individual</option>
            <option value="company">Company</option>
          </select>
        </label>
        <br />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{
            width: "100%",
            borderRadius: "10px",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
          }}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={{
            width: "100%",
            borderRadius: "10px",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
          }}
          required
        />
        <br />
        <button type="submit" className="submitButton1">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
