import React, { useState } from "react";
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
      let endpoint;
      if (formData.userType === "individual") {
        endpoint = "/api/user/login";
      } else if (formData.userType === "company") {
        endpoint = "/api/company/login";
      }

      const res = await axios.post(endpoint, {
        email: formData.email,
        password: formData.password,
      });

      // Store the response in localStorage
      localStorage.setItem("HirizloginInfo", JSON.stringify(res.data));

      console.log(JSON.stringify(res.data));

      // Reload the page after successful login
      window.location.reload();
    } catch (error) {
      console.error("Login failed:", error.response.data);
      // Handle error, show error message, etc.
    }
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
              border: "1px solid #ccc",
              borderRadius: "4px",
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
            borderRadius: "4px",
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
            borderRadius: "4px",
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
