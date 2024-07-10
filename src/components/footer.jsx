import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#f0f0f0",
    padding: " 10px",
    textAlign: "center",
    left: 0,
    bottom: 0,
  };

  const textStyle = {
    fontSize: "14px",
    color: "#333",
    margin: 0,
  };

  return (
    <div style={footerStyle}>
      <p style={textStyle}>Made by Prashant</p>
    </div>
  );
};

export default Footer;
