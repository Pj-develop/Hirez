import React, { useState } from "react";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function BotComponent() {
  const [inputValue, setInputValue] = useState("");
  const [response, setResponse] = useState(null);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/bot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: inputValue }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setResponse(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter your query"
        />
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h3>Response from Bot:</h3>
          <ul>
            {response.content.split("\n\n").map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default BotComponent;
