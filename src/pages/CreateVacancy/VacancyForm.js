import React, { useState } from "react";
import "./Form.css"; // Import your CSS file for styling

const VacancyForm = () => {
  const data = localStorage.getItem("HirizloginInfo");
  let companyId = "";

  if (data) {
    const { Id } = JSON.parse(data);
    companyId = Id;
  }

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    requirements: "",
    responsibilities: "",
    location: "",
    expectedSalary: {
      minSalary: "",
      maxSalary: "",
    },
    benefits: "",
    skillsRequired: "",
    numberOfVacanciesAvailable: "",
    company: companyId,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form fields
    if (
      !formData.title ||
      !formData.description ||
      !formData.requirements ||
      !formData.responsibilities ||
      !formData.location ||
      !formData.expectedSalary.minSalary ||
      !formData.expectedSalary.maxSalary ||
      !formData.benefits ||
      !formData.skillsRequired ||
      !formData.numberOfVacanciesAvailable ||
      !formData.company
    ) {
      alert("All fields are required");
      return;
    }

    try {
      // Send data to API
      const response = await fetch("http://localhost:4001/api/vacancy/create", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log(responseData);
        // Handle success, reset form
        setFormData({
          title: "",
          description: "",
          requirements: "",
          responsibilities: "",
          location: "",
          expectedSalary: {
            minSalary: "",
            maxSalary: "",
          },
          benefits: "",
          skillsRequired: "",
          numberOfVacanciesAvailable: "",
          company: companyId, // Reset the company ID
        });
        alert(responseData.message); // Show success message
      } else {
        // Handle error
        console.error(responseData);
        alert(responseData.message); // Show error message
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit form. Please try again."); // Generic error message
    }
  };
  return (
    <div className="form-container">
      <h2>Job Posting Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="requirements">Requirements:</label>
        <textarea
          id="requirements"
          name="requirements"
          value={formData.requirements}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="responsibilities">Responsibilities:</label>
        <textarea
          id="responsibilities"
          name="responsibilities"
          value={formData.responsibilities}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="location">Location:</label>
        <select
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
        >
          <option value="">Select location</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Chicago">Chicago</option>
          {/* Add more locations as needed */}
        </select>

        <label htmlFor="minSalary">Expected Salary Min:</label>
        <input
          type="number"
          id="minSalary"
          name="minSalary"
          value={formData.expectedSalary.minSalary}
          onChange={(e) =>
            handleChange({
              target: {
                name: "expectedSalary",
                value: {
                  ...formData.expectedSalary,
                  minSalary: e.target.value,
                },
              },
            })
          }
        />

        <label htmlFor="maxSalary">Expected Salary Max:</label>
        <input
          type="number"
          id="maxSalary"
          name="maxSalary"
          value={formData.expectedSalary.maxSalary}
          onChange={(e) =>
            handleChange({
              target: {
                name: "expectedSalary",
                value: {
                  ...formData.expectedSalary,
                  maxSalary: e.target.value,
                },
              },
            })
          }
        />

        <label htmlFor="benefits">Benefits:</label>
        <textarea
          id="benefits"
          name="benefits"
          value={formData.benefits}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="skillsRequired">Skills Required:</label>
        <input
          type="text"
          id="skillsRequired"
          name="skillsRequired"
          value={formData.skillsRequired}
          onChange={handleChange}
        />

        <label htmlFor="numberOfVacanciesAvailable">Vacancies Available:</label>
        <input
          type="number"
          id="numberOfVacanciesAvailable"
          name="numberOfVacanciesAvailable"
          value={formData.numberOfVacanciesAvailable}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VacancyForm;
