import React from "react";
import "../assets/styles/Stats.css"; // Ensure this path points to your CSS file
import geeksLogo from "../assets/Logo/CodingNinja.png"; // Example logo, replace with your logo

const CodingNinja = () => {
  return (
    <div className="stats-card">
      <div className="logo-container">
        <a
          href="https://www.naukri.com/code360/profile/32d99ef2-984c-44d3-8c2a-a5ad82144f0d"
          target="_blank"
          rel="noopener noreferrer"
          className="stats-link"
        >
          <img src={geeksLogo} alt="Profile Logo" className="logo1" />
        </a>
      </div>
      <div className="stats-content">
        <h2>GeeksforGeeks Profile Stats</h2>
        <ul>
          <li>Total Problems Solved:138</li>
          <li>Max Streak: 6 days</li>
          <li>Easy Problems Solved: 31</li>
          <li>Medium Problems Solved: 51</li>
          <li>Hard Problems Solved: 8</li>
        </ul>
      </div>
    </div>
  );
};

export default CodingNinja;
