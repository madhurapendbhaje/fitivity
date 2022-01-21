import React from "react";
import { Link } from "react-router-dom";
import backArrow from "../../styles/assets/icons/back.svg";

import "./Day1Page.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Day 1",
    SpO2: 4000,
    RESPIRATORY: 2400,
    RHR: 1500,
    amt: 2400
  },
  {
    name: "Day 2",
    SpO2: 3000,
    RESPIRATORY: 1398,
    RHR: 2500,
    amt: 2210
  },
  {
    name: "Day 3",
    SpO2: 2000,
    RESPIRATORY: 6800,
    RHR: 3100,
    amt: 2290
  },
  {
    name: "Day 4",
    SpO2: 2780,
    RESPIRATORY: 3908,
    RHR: 2600,
    amt: 2000
  },
  {
    name: "Day 5",
    SpO2: 1890,
    RESPIRATORY: 4800,
    RHR: 2900,
    amt: 2181
  },
  {
    name: "Day 6",
    SpO2: 2390,
    RESPIRATORY: 3800,
    RHR: 3200,
    amt: 2500
  },
  {
    name: "Day 7",
    SpO2: 3490,
    RESPIRATORY: 4300,
    RHR: 2800,
    amt: 2100
  }
];

function Day1Page() {
  return (
    <div>
      <div className="image-container">
        <Link to="/">
          <img src={backArrow} className="back-icons" alt=""></img>
        </Link>
        <Link to="/personal-challenge/report" className="finish-button">
          Completed
        </Link>
      </div>

      <div className="line-chart-container">
        <LineChart
          width={350}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="SpO2" stroke="#e14328" />
          <Line type="monotone" dataKey="RHR" stroke="#5491d8" />
          <Line
            type="monotone"
            dataKey="RESPIRATORY"
            stroke="#6EE847"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    </div>
  );
}

export default Day1Page;
