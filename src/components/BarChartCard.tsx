// =============================
// EXACT DARK THEME - Cost by Service
// Matches Provided Screenshot Style
// React + Vite + TypeScript + Recharts
// =============================

// npm install recharts

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { service: "EC2", cost: 55000 },
  { service: "S3", cost: 32000 },
  { service: "RDS", cost: 35000 },
  { service: "Lambda", cost: 18000 },
  { service: "EKS", cost: 42000 },
  { service: "CloudFront", cost: 15000 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#111",
          border: "1px solid #1f2937",
          padding: "8px 12px",
          borderRadius: "8px",
          color: "#84cc16",
          fontSize: "13px",
        }}
      >
        ${payload[0].value.toLocaleString()}
      </div>
    );
  }
  return null;
};

const CostByServiceChart: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "420px",
        background: "#0b0f0c",
        borderRadius: "16px",
        padding: "24px",
        border: "1px solid #1f2937",
      }}
    >
      <h2
        style={{
          color: "#e5e7eb",
          fontSize: "18px",
          marginBottom: "20px",
          fontWeight: 500,
        }}
      >
        Cost by Service
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 10, right: 20, left: 10, bottom: 0 }}
        >
          <defs>
            <linearGradient id="greenGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#65a30d" />
              <stop offset="100%" stopColor="#84cc16" />
            </linearGradient>
          </defs>

          <CartesianGrid
            stroke="#1f2937"
            strokeDasharray="3 3"
            horizontal={true}
            vertical={false}
          />

          <XAxis
            type="number"
            domain={[0, 60000]}
            ticks={[0, 15000, 30000, 45000, 60000]}
            tickFormatter={(value) => `$${value / 1000}K`}
            stroke="#6b7280"
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            type="category"
            dataKey="service"
            stroke="#6b7280"
            tick={{ fill: "#d1d5db", fontSize: 13 }}
            axisLine={false}
            tickLine={false}
            width={110}
          />

          <Tooltip content={<CustomTooltip />} cursor={{ fill: "#111" }} />

          <Bar
            dataKey="cost"
            fill="url(#greenGradient)"
            radius={[0, 6, 6, 0]}
            barSize={18}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CostByServiceChart;