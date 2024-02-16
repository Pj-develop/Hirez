import React, { useState, useEffect } from "react";
import "./jobsCard.css";

function FindJobs() {
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const response = await fetch("/api/vacancy");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (Array.isArray(data.vacancies)) {
          // Sort vacancies by latest first based on createdAt or updatedAt field
          const sortedVacancies = data.vacancies.sort((a, b) => {
            return (
              new Date(b.createdAt || b.updatedAt) -
              new Date(a.createdAt || a.updatedAt)
            );
          });
          setVacancies(sortedVacancies);
        } else {
          console.error(
            "Data fetched does not contain an array of vacancies:",
            data
          );
        }
      } catch (error) {
        console.error("Error fetching vacancies:", error);
      }
    };

    fetchVacancies();
  }, []);

  return (
    <div>
      {vacancies.map((vacancy) => (
        <div key={vacancy._id} className="job-card">
          <div className="job-header">
            <h2 className="job-title">{vacancy.title}</h2>
            <p className="job-company">{vacancy.company.companyName}</p>
            <p className="job-location">
              <span
                className={vacancy.isRemote ? "bi-house" : "bi-geo-alt"}
              ></span>
              {vacancy.isRemote ? "Work from Home" : vacancy.location}
            </p>
          </div>
          <div className="job-details">
            <p>
              <strong>START DATE:</strong> Immediately
            </p>
            <p>
              <strong>INCOME:</strong> ₹{vacancy.expectedSalary.minSalary}/month
            </p>
            <p>
              <span className="job-time">Just now</span>
              <span className="job-type">{vacancy.status}</span>
            </p>
            <button className="job-button">View details</button>
            <button className="apply-button">Apply</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FindJobs;
