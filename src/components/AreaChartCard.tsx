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
  { week: "Week 1", value: 45000 },
  { week: "Week 2", value: 52000 },
  { week: "Week 3", value: 70000 },
  { week: "Week 4", value: 62000 },
];

const AreaChartComponent = () => {
  return (
    <div className="chart-card">
      <h3 className="chart-title">Cost Trend</h3>

      <ResponsiveContainer width="100%" height={320}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
        >
          {/* Soft Gradient */}
          <defs>
            <linearGradient id="softGreen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity={0.25} />
              <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Clean Grid */}
          <CartesianGrid
            stroke="#1f2937"
            strokeDasharray="3 3"
            vertical={false}
          />

          {/* X Axis */}
          <XAxis
            dataKey="week"
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          {/* Y Axis */}
          <YAxis
            domain={[0, 75000]}
            ticks={[0, 25000, 50000, 75000]}
            tickFormatter={(value) => `$${value / 1000}k`}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          {/* Tooltip */}
          <Tooltip
            formatter={(value) => {
              if (typeof value === "number") {
                return [`$${value.toLocaleString()}`, "Cost"];
              }
              return [value, "Cost"];
            }}
            contentStyle={{
              backgroundColor: "#0f172a",
              border: "1px solid #22c55e",
              borderRadius: "8px",
              color: "#fff",
            }}
          />

          {/* Thin Smooth Line + Light Fill */}
          <Area
            type="monotone"
            dataKey="value"
            stroke="#22c55e"
            strokeWidth={2}
            fill="url(#softGreen)"
            dot={false}
            activeDot={{ r: 5 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartComponent;