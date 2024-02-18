import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; // Import the CSS file

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
    <div className="container1"> {/* Use className instead of style */}
      <h2 className="title1">Login</h2> {/* Use className instead of style */}
      <form onSubmit={handleSubmit}>
        <label style={{ display: "block" }}>
          Select User Type:
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            className="input"
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
          className="input"
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="input1"
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
