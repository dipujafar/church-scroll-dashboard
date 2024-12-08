"use client";
import { Select } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";

const data = [
  { name: "Jan", user: 100, church: 40, church_Member: 50 },
  { name: "Feb", user: 110, church: 45, church_Member: 60 },
  { name: "Mar", user: 150, church: 47, church_Member: 100 },
  { name: "Apr", user: 150, church: 48, church_Member: 120 },
  { name: "May", user: 180, church: 52, church_Member: 150 },
  { name: "Jun", user: 200, church: 54, church_Member: 170 },
  { name: "Jul", user: 220, church: 60, church_Member: 180 },
  { name: "Aug", user: 230, church: 69, church_Member: 190 },
  { name: "Sep", user: 250, church: 73, church_Member: 210 },
  { name: "Oct", user: 280, church: 78, church_Member: 240 },
  { name: "Nov", user: 300, church: 82, church_Member: 260 },
  { name: "Dec", user: 350, church: 90, church_Member: 280 },
];

const UserOverViewChart = () => {
  const [selectedYear, setSelectedYear] = useState<string>(
    new Date().getFullYear().toString()
  );
  const [selectedUserType, setSelectedUserType] = useState("user");

  const handleChange = (value: string) => {
    setSelectedYear(value);
  };
  const handleUserChange = (value: string) => {
    setSelectedUserType(value);
  };

  return (
    <div className="  rounded-lg p-8 w-full ">
      <div className="flex lg:flex-wrap xl:flex-nowrap justify-between items-center mb-10 gap-2">
        <h1 className="text-xl text-black/70">User Overview</h1>

        <div className="flex gap-x-2 items-center ">
          <h1>
            Account Type:
            <Select
              value={selectedUserType}
              style={{
                width: 150,
                marginLeft: "5px",
              }}
              onChange={handleUserChange}
              options={[
                { value: "user", label: "User" },
                { value: "churchAdmin", label: "Church Admin" },
                { value: "churchMember", label: "Church Member" },
              ]}
            />
          </h1>

          <Select
            value={selectedYear}
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: "2024", label: "2024" },
              { value: "2025", label: "2025" },
              { value: "2026", label: "2026" },
              { value: "2027", label: "2027" },
              { value: "2028", label: "2028" },
            ]}
          />
        </div>
      </div>

      <div className=" flex gap-x-3 justify-center items-center">
        <div className="flex gap-x-1">
          <p className="bg-[#54bbf7] p-2 rounded-full w-fit"></p>
          <p className="text-[11px]">Churches</p>
        </div>
        <div className="flex gap-x-1">
          <p className="bg-[#7fc6f0] p-2 rounded-full w-fit"></p>
          <p className="text-[11px]">Churches Member</p>
        </div>
        <div className="flex gap-x-1">
          <p className="bg-[#aadbf8] p-2 rounded-full w-fit"></p>
          <p className="text-[11px]">Users</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}

          <Bar dataKey="church" stackId="a" fill="#54bbf7" />
          <Bar dataKey="church_Member" stackId="a" fill="#7fc6f0" />
          <Bar dataKey="user" stackId="a" fill="#aadbf8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserOverViewChart;
