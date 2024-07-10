import React from "react";
import "../assets/styles/Stats.css";
import leetcodeLogo from "../assets/Logo/leetcode.png"; // Ensure this path points to your logo image

const Stats = ({ data }) => {
  return (
    <div className="stats-card">
      <div className="logo-container">
        <a
          href="https://leetcode.com/u/Prashant_Kumar_Aryan/"
          target="_blank"
          rel="noopener noreferrer"
          className="stats-link"
        >
          <img src={leetcodeLogo} alt="LeetCode Logo" className="logo1" />
        </a>
      </div>
      <div className="stats-content">
        <h2>Stats</h2>
        <ul>
          <li>Total Solved: {data.totalSolved}</li>
          <li>Easy Solved: {data.easySolved}</li>
          <li>Medium Solved: {data.mediumSolved}</li>
          <li>Hard Solved: {data.hardSolved}</li>
          <li>Acceptance Rate: {data.acceptanceRate}%</li>
          <li>Ranking: {data.ranking}</li>
          <li>Contribution Points: {data.contributionPoints}</li>
          <li>Reputation: {data.reputation}</li>
        </ul>
      </div>
    </div>
  );
};

export default Stats;
