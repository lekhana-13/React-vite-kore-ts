import React from "react";

const Header: React.FC = () => {
  return (
    <div
      style={{
        background: "#132019",
        padding: "15px",
        borderRadius: "10px",
        marginBottom: "20px"
      }}
    >
      <h2>Cost Analyzer</h2>
      <p>Track and analyze your business performance metrics</p>
    </div>
  
  );
};

export default Header;