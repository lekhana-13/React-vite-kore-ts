// =====================================================
// COST TREND AREA CHART
// Styled EXACTLY like your screenshot (Dark FinOps Theme)
// React + Vite + TypeScript Compatible
// =====================================================

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { week: "Week 1", value: 72000 },
  { week: "Week 2", value: 76000 },
  { week: "Week 3", value: 82000 },
  { week: "Week 4", value: 78000 },
];

const AreaChartComponent: React.FC = () => {
  return (
    <div
      style={{
        background: "#0b0f0c",
        borderRadius: "16px",
        padding: "24px",
        border: "1px solid #1f2937",
        height: "420px",
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
        Cost Trend
      </h3>

      <ResponsiveContainer width="100%" height="85%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
        >
          <defs>
            {/* Subtle green glow fill like screenshot */}
            <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#84cc16" stopOpacity={0.25} />
              <stop offset="100%" stopColor="#84cc16" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Horizontal soft grid only */}
          <CartesianGrid
            stroke="#1f2937"
            strokeDasharray="3 3"
            vertical={false}
          />

          <XAxis
            dataKey="week"
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            domain={[0, 100000]}
            ticks={[0, 25000, 50000, 75000, 100000]}
            tickFormatter={(value) => `$${value / 1000}K`}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            formatter={(value: any) => [`$${value.toLocaleString()}`, "Cost"]}
            contentStyle={{
              backgroundColor: "#111",
              border: "1px solid #1f2937",
              borderRadius: "8px",
              color: "#84cc16",
              fontSize: "13px",
            }}
            cursor={{ stroke: "#84cc16", strokeWidth: 1 }}
          />

          <Area
            type="monotone"
            dataKey="value"
            stroke="#84cc16"
            strokeWidth={2}
            fill="url(#trendFill)"
            dot={false}
            activeDot={{ r: 4, fill: "#84cc16" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartComponent;
