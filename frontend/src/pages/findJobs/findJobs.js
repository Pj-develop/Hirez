import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./jobsCard.css";

function FindJobs({ api, accountType, Id }) {
  const [vacancies, setVacancies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const response = await fetch(api);
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
  }, [api]);

  const filteredVacancies = vacancies.filter((vacancy) =>
    vacancy.skillsRequired
      .join(", ") // Convert array to string
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Skills"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredVacancies.map((vacancy) => (
        <div key={vacancy._id} className="job-card">
          {/* Job card content */}
          <div className="job-header">
            <h2 className="job-title">{vacancy.title}</h2>
            <p className="job-company">{vacancy.company.companyName}</p>
            <p className="job-location">
              <span
                className={vacancy.isRemote ? "bi-house" : "bi-geo-alt"}
              ></span>
              {vacancy.isRemote ? "Work from Home" : vacancy.location}
            </p>
            {vacancy.skillsRequired.map((skill, index) => (
              <span className="job-type" key={index}>
                {skill}
              </span>
            ))}
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
            <Link to={`/vacancyDetails/${vacancy._id}`} className="job-button">
              View details
            </Link>
            {accountType === "user" ? (
              <Link
                className="apply-button"
                to={`/vacancy/apply/${Id}/${vacancy._id}`}
              >
                Apply
              </Link>
            ) : accountType === "company" ? (
              <button className="see-Candidatates">See Candidates</button>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FindJobs;
