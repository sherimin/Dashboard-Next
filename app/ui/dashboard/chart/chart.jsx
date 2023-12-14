"use client";

import styles from "./chart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sun",
    visit: 4000,
    order: 2400,
  },
  {
    name: "Mon",
    visit: 3000,
    order: 1198,
  },
  {
    name: "Tue",
    visit: 2000,
    order: 3800,
  },
  {
    name: "Wed",
    visit: 2780,
    order: 3908,
  },
  {
    name: "Thu",
    visit: 1890,
    order: 4800,
  },
  {
    name: "Fri",
    visit: 2390,
    order: 3800,
  },
  {
    name: "Sat",
    visit: 3490,
    order: 4300,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Summary [Demo Data]</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#465F7B", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#A9A9A9"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="order" stroke="#408EC6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
