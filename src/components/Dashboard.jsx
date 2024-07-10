import React, { useState, useEffect } from "react";
import Stats from "./Stats.jsx";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://leetcode-stats-api.herokuapp.com/Prashant_Kumar_Aryan")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Stats data={data} />
    </div>
  );
};

export default Dashboard;
