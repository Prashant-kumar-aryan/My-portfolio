import React from "react";
import "../assets/styles/Stats.css"; // Ensure this path points to your CSS file
import geeksLogo from "../assets/Logo/gfg.png"; // Example logo, replace with your logo

const ProfileCard = () => {
  return (
    <div className="stats-card">
      <div className="logo-container">
        <a
          href="https://www.geeksforgeeks.org/user/prashantj7gz/"
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
          <li>Total Problems Solved: 85</li>
          <li>Max Streak: 1073</li>
          <li>Coding Score: 256</li>
          <li>Easy Problems Solved: 34</li>
          <li>Medium Problems Solved: 37</li>
          <li>Hard Problems Solved: 4</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
