import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/user/signup", formData);

      // Store the response in localStorage
      localStorage.setItem("HirizloginInfo", JSON.stringify(res.data));

      window.location.reload();

      // Redirect or show a success message
    } catch (error) {
      console.error("Signup failed:", error.response.data);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" , backgroundColor:"#ff5722", borderRadius:"10px"}}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#E0F1E0", fontWeight:"700", fontSize:"3rem" }}>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "10px",borderRadius:"10px"}}
          required
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "10px"  ,border:"1px solid #ccc",borderRadius:"10px"}}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "10px"   ,border:"1px solid #ccc",borderRadius:"10px"}}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Phone Number"
          name="phoneNo"
          value={formData.phoneNo}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius:"10px"}}
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
