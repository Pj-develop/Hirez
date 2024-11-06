import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams hook
import "./SeeCandidates.css"; // Import your CSS file

function SeeCandidate() {
  const [candidates, setCandidates] = useState([]);
  const { vacancyId } = useParams(); // Get the vacancyId from the URL

  useEffect(() => {
    // Define the URL for your API endpoint
    const apiUrl = `/api/vacancy/applications/${vacancyId}`; // Corrected URL construction

    // Fetch candidates data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched candidates data
        setCandidates(data);
      })
      .catch((error) => {
        console.error("Error fetching candidates:", error);
      });
  }, [vacancyId]); // Include vacancyId in the dependency array

  return (
    <div>
      {candidates.map((candidate) => (
        <div className="profile-card" key={candidate.id}>
          <div className="username">{candidate.name}</div>
          <p>
            <strong>Skills: </strong> &nbsp;
            <span className="e">{candidate.skills.join(", ")}</span>
          </p>
          <p>
            <strong>Experience: </strong> &nbsp;
            <span className="k">{candidate.experience}</span>
          </p>
          <div className="button-container">
            <button className="button reject">Reject</button>
            <button className="button waitlist">Move to Waitlist</button>
            <button className="button preview">Preview</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SeeCandidate;
