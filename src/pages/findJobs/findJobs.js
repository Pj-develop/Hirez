import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./jobsCard.css";

function FindJobs({ api }) {
  const [vacancies, setVacancies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchField, setSearchField] = useState("skills"); // Default search field
  const data = localStorage.getItem("HirizloginInfo");
  const { accountType, Id } = JSON.parse(data);

  if (accountType === "company") {
    api += Id;
  }

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        if (Array.isArray(responseData.vacancies)) {
          const sortedVacancies = responseData.vacancies.sort((a, b) => {
            return (
              new Date(b.createdAt || b.updatedAt) -
              new Date(a.createdAt || a.updatedAt)
            );
          });
          setVacancies(sortedVacancies);
        } else {
          console.error(
            "Data fetched does not contain an array of vacancies:",
            responseData
          );
        }
      } catch (error) {
        console.error("Error fetching vacancies:", error);
      }
    };

    fetchVacancies();
  }, [api, data]);

  const filteredVacancies = vacancies.filter((vacancy) => {
    if (searchField === "title") {
      return vacancy.title.toLowerCase().includes(searchQuery.toLowerCase());
    } else if (searchField === "skills") {
      return vacancy.skillsRequired
        .join(", ")
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    }
    return false;
  });

  // Function to handle job application
  const applyForJob = async (vacancyId) => {
    try {
      const response = await fetch(`/api/vacancy/apply/${Id}/${vacancyId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: Id,
          vacancyId: vacancyId,
        }),
      });
      if (response.ok) {
        // Handle successful application, e.g., show a success message
        console.log("Application successful");
      } else {
        // Handle error response from the server
        console.error("Failed to apply for the job");
      }
    } catch (error) {
      console.error("Error applying for the job:", error);
    }
  };

  return (
    <div>
      <div>
        <select
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
        >
          <option value="title">Title</option>
          <option value="skills">Skills</option>
        </select>
        <input
          type="text"
          placeholder={`Search by ${searchField}`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {filteredVacancies.map((vacancy) => (
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
              <button
                className="apply-button"
                onClick={() => applyForJob(vacancy._id)}
              >
                Apply
              </button>
            ) : accountType === "company" ? (
              <Link
                to={`/candidates/${vacancy._id}`}
                className="see-Candidatates"
              >
                See Candidates
              </Link>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FindJobs;
