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

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/company/signup", formData);
      localStorage.setItem("HirizloginInfo", JSON.stringify(res.data));
      window.location.reload();
    } catch (error) {
      console.error("Signup failed:", error.response.data);
      setError(error.response.data.message);
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "400px",
        margin: "auto",
        backgroundColor: "#009688",
        borderRadius: "20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#E0F1E0",
          fontWeight: "700",
          fontSize: "3rem",
        }}
      >
        Signup
      </h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "10px",
          }}
          required
        />
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
            borderRadius: "10px",
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
            borderRadius: "10px",
          }}
          required
        />
        <br />
        <input
          type="number"
          placeholder="Year of Establishment"
          name="yearOfEstablishment"
          value={formData.yearOfEstablishment}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "10px",
          }}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Fields of Work (comma separated)"
          name="fieldsOfWork"
          value={formData.fieldsOfWork}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "10px",
          }}
          required
        />
        <br />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#79aef5",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
          }}
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
