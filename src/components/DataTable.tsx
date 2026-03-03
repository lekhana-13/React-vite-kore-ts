// =====================================================
// RESOURCE DETAILS TABLE
// Styled EXACTLY like your screenshot (Dark FinOps Theme)
// React + Vite + TypeScript Compatible
// =====================================================

import React from "react";

const DataTable: React.FC = () => {
  return (
    <div
      style={{
        background: "#0b0f0c",
        borderRadius: "16px",
        padding: "24px",
        border: "1px solid #1f2937",
        marginTop: "24px",
      }}
    >
      <h3
        style={{
          color: "#e5e7eb",
          fontSize: "18px",
          fontWeight: 500,
          marginBottom: "20px",
        }}
      >
        Resource Details
      </h3>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "14px",
          color: "#d1d5db",
        }}
      >
        <thead>
          <tr
            style={{
              color: "#9ca3af",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            <th align="left">Resource Type</th>
            <th align="left">Owner</th>
            <th align="right">Cost</th>
            <th align="center">Usage</th>
            <th align="center">Change</th>
            <th align="center">Status</th>
            <th align="left">AI Suggestion</th>
          </tr>
        </thead>

        <tbody>
          {[
            {
              type: "EC2 Instance",
              owner: "Sai",
              cost: "$42,000",
              usage: "78%",
              change: "+12%",
              changeColor: "#84cc16",
              status: "Optimal",
              statusColor: "#84cc16",
              suggestion: "Right-size instance to save cost",
            },
            {
              type: "S3 Bucket",
              owner: "DevOps",
              cost: "$28,000",
              usage: "64%",
              change: "-8%",
              changeColor: "#ef4444",
              status: "Warning",
              statusColor: "#facc15",
              suggestion: "Enable lifecycle policy",
            },
            {
              type: "RDS Database",
              owner: "Finance",
              cost: "$35,000",
              usage: "88%",
              change: "+15%",
              changeColor: "#84cc16",
              status: "Critical",
              statusColor: "#ef4444",
              suggestion: "Upgrade to reserved instance",
            },
          ].map((row, index) => (
            <tr
              key={index}
              style={{
                borderTop: "1px solid #1f2937",
              }}
            >
              <td style={{ padding: "16px 0" }}>{row.type}</td>
              <td>{row.owner}</td>
              <td align="right">{row.cost}</td>
              <td align="center">{row.usage}</td>
              <td align="center" style={{ color: row.changeColor }}>
                {row.change}
              </td>
              <td align="center">
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "999px",
                    background: "rgba(132,204,22,0.08)",
                    color: row.statusColor,
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  {row.status}
                </span>
              </td>
              <td style={{ color: "#38bdf8" }}>{row.suggestion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;