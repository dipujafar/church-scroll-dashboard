"use client";
import { Select } from "antd";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";

const data = [
  { name: "Jan", sell: 1200 },
  { name: "Feb", sell: 1402 },
  { name: "Mar", sell: 1525 },
  { name: "Apr", sell: 1222 },
  { name: "May", sell: 1553 },
  { name: "Jun", sell: 1634 },
  { name: "Jul", sell: 1923 },
  { name: "Aug", sell: 1324 },
  { name: "Sep", sell: 1834 },
  { name: "Oct", sell: 1256 },
  { name: "Nov", sell: 1634 },
  { name: "Dec", sell: 2105 },
];

const PageViewChart = () => {
  const [selectedYear, setSelectedYear] = useState("2024");

  const handleChange = (value: string) => {
    setSelectedYear(value);
  };

  return (
    <div className="rounded-lg p-8 w-full xl:w-1/2">
      <div className="text-parimaryWhite flex lg:flex-wrap xl:flex-nowrap justify-between items-center mb-10 gap-2">
        <h1 className="text-xl text-black/70">Page View</h1>

        <Select
          value={selectedYear}
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "2024", label: "2024" },
            { value: "2025", label: "2025" },
            { value: "2026", label: "2026" },
            { value: "2027", label: "2027" },
          ]}
        />
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="50%" stopColor="#a0d4f3" stopOpacity={1} />
              <stop offset="100%" stopColor="#ddeffa" stopOpacity={0.4} />
            </linearGradient>
          </defs>
          <XAxis
            tickMargin={10}
            axisLine={false}
            tickLine={false}
            dataKey="name"
          />
          <YAxis tickMargin={20} axisLine={false} tickLine={false} />
          <Tooltip />
          <Area
            activeDot={false}
            type="monotone"
            dataKey="sell"
            strokeWidth={1}
            stroke="#1e7aec"
            fill="url(#color)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PageViewChart;
