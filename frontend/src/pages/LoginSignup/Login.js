import React, { useState} from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "individual",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate input (client-side)
      if (!validateEmail(formData.email)) {
        throw new Error("Invalid email format");
      }
      if (!formData.password) {
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
      console.error("Login failed:", error.message);
      // Display user-friendly error message
    }
  };

  // Client-side validation (example)
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
        Login
      </h2>
      <form onSubmit={handleSubmit}>
        <label style={{ display: "block" }}>
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
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
          }}
          required
        />
        <br />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background 0.3s ease",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
