import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./VacancyDetails.css"; // Import CSS file

function VacancyDetails() {
  const { vacancyId } = useParams();
  const [vacancy, setVacancy] = useState(null);

  useEffect(() => {
    const fetchVacancyDetails = async () => {
      try {
        const response = await fetch(`/api/vacancy/${vacancyId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setVacancy(data.vacancy);
      } catch (error) {
        console.error("Error fetching vacancy details:", error);
      }
    };

    fetchVacancyDetails();
  }, [vacancyId]);

  if (!vacancy) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="vacancy-details">
      {" "}
      {/* Apply class */}
      <h2>{vacancy.title}</h2>
      <p>Description: {vacancy.description}</p>
      <p>Location: {vacancy.location}</p>
      {/* Display company information */}
      <h3>Company Information:</h3>
      <p>Company Name: {vacancy.company.companyName}</p>
      <p>Email: {vacancy.company.email}</p>
      <p>Year of Establishment: {vacancy.company.yearOfEstablishment}</p>
      <p>Fields of Work: {vacancy.company.fieldsOfWork.join(", ")}</p>
      <p>Short Description: {vacancy.company.ShortDescription.join(", ")}</p>
      {/* You can add more company fields here */}
      <p>
        Expected Salary: ₹{vacancy.expectedSalary.minSalary} - ₹
        {vacancy.expectedSalary.maxSalary}/month
      </p>
      <p>Number of Vacancies Available: {vacancy.numberOfVacanciesAvailable}</p>
      <p>Status: {vacancy.status}</p>
      <h3>Requirements:</h3>
      <ul>
        {vacancy.requirements.map((requirement, index) => (
          <li key={index}>{requirement}</li>
        ))}
      </ul>
      <h3>Responsibilities:</h3>
      <ul>
        {vacancy.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
      <h3>Benefits:</h3>
      <ul>
        {vacancy.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      <h3>Skills Required:</h3>
      <ul>
        {vacancy.skillsRequired.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      {/* You can add more fields here as needed */}
    </div>
  );
}

export default VacancyDetails;
