import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    password: "",
    yearOfEstablishment: "",
    fieldsOfWork: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/company/signup", formData);
      console.log("Signup successful:", res.data);

      // Store the response in localStorage
      localStorage.setItem("HirizloginInfo", JSON.stringify(res.data));
      console.log(JSON.stringify(res.data));
      // Redirect or show a success message
    } catch (error) {
      console.error("Signup failed:", error.response.data);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          required
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          required
        />
        <br />
        <input
          type="number"
          placeholder="Year of Establishment"
          name="yearOfEstablishment"
          value={formData.yearOfEstablishment}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Fields of Work (comma separated)"
          name="fieldsOfWork"
          value={formData.fieldsOfWork}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          required
        />
        <br />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "blue",
            color: "#fff",
            border: "none",
          }}
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;