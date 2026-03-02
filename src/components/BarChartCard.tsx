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
  { name: "EC2", value: 60000 },
  { name: "S3", value: 52000 },
  { name: "RDS", value: 48000 },
  { name: "Lambda", value: 35000 },
  { name: "EKS", value: 30000 },
  { name: "CloudFront", value: 20000 },
];

const BarChartComponent = () => {
  return (
    <div className="chart-card">
      <h3 className="chart-title">Cost by Service</h3>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
        >
          {/* Grid */}
          <CartesianGrid
            stroke="#1f2a1f"
            strokeDasharray="3 3"
            horizontal={false}
          />

          {/* X Axis → $0k, $15k, $30k, $45k, $60k */}
          <XAxis
            type="number"
            tickFormatter={(value: number) => `$${value / 1000}k`}
            ticks={[0, 15000, 30000, 45000, 60000]}
            domain={[0, 60000]}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          {/* Y Axis → Service Names */}
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fill: "#9ca3af", fontSize: 13 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            formatter={(value: number | undefined) => [
            `$${value ?? 0}`,
         "Cost"
        ]}
            contentStyle={{
              backgroundColor: "#0f172a",
              border: "1px solid #22c55e",
              borderRadius: "8px",
              color: "#fff",
            }}
            cursor={{ fill: "rgba(34,197,94,0.08)" }}
          />

          <Bar
            dataKey="value"
            fill="#22c55e"
            radius={[0, 8, 8, 0]}
            barSize={14}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;