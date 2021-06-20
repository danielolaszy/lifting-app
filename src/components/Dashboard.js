import React from "react";
import "../App.css";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Jan 1",
    dl: 140,
    sqt: 100,
    bp: 70,
  },
  {
    name: "Jan 2",
    dl: 150,
    sqt: 105,
    bp: 80,
  },
  {
    name: "Jan 3",
    dl: 160,
    sqt: 110,
    bp: 75,
  },
  {
    name: "Jan 4",
    dl: 160,
    sqt: 115,
    bp: 80,
  },
  {
    name: "Jan 5",
    dl: 150,
    sqt: 120,
    bp: 85,
  },
  {
    name: "Jan 6",
    dl: 160,
    sqt: 125,
    bp: 87.5,
  },
  {
    name: "Jan 7",
    dl: 165,
    sqt: 130,
    bp: 90,
  },
];

const data1 = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400,
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210,
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290,
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000,
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181,
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500,
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100,
  },
];
const Dashboard = () => {
  return (
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-3 row-cols-xl-6  g-2 g-lg-3">
        <div class="col">
          <div class="p-3 board-bg-primary rounded-3 text-center text-sm-start">
            <h6 className="board-text-primary">Deadlift</h6>
            <h1 className="board-text-secondary fw-light">140kg</h1>
            <span class="badge rounded-pill bg-success">+5.6%</span>
          </div>
        </div>
        <div class="col">
          <div class="p-3 board-bg-primary rounded-3 text-center text-sm-start">
            <h6 className="board-text-primary">Squat</h6>
            <h1 className="board-text-secondary fw-light">140kg</h1>
            <span class="badge rounded-pill bg-success">+5.6%</span>
          </div>
        </div>
        <div class="col">
          <div class="p-3 board-bg-primary rounded-3 text-center text-sm-start">
            <h6 className="board-text-primary">Bench Press</h6>
            <h1 className="board-text-secondary fw-light">140kg</h1>
            <span class="badge rounded-pill bg-success">+5.6%</span>
          </div>
        </div>
        <div class="col">
          <div class="p-3 board-bg-primary rounded-3 text-center text-sm-start">
            <h6 className="board-text-primary">Deadlift</h6>
            <h1 className="board-text-secondary fw-light">140kg</h1>
            <span class="badge rounded-pill bg-success">+5.6%</span>
          </div>
        </div>
        <div class="col">
          <div class="p-3 board-bg-primary rounded-3 text-center text-sm-start">
            <h6 className="board-text-primary">Squat</h6>
            <h1 className="board-text-secondary fw-light">140kg</h1>
            <span class="badge rounded-pill bg-success">+5.6%</span>
          </div>
        </div>
        <div class="col">
          <div class="p-3 board-bg-primary rounded-3 text-center text-sm-start">
            <h6 className="board-text-primary">Bench Press</h6>
            <h1 className="board-text-secondary fw-light">140kg</h1>
            <span class="badge rounded-pill bg-success">+5.6%</span>
          </div>
        </div>
      </div>
      <div class="row row row-cols-1 row-cols-lg-6 g-2 g-lg-3 pt-2 pt-lg-3">
        <div class="col-lg-6">
          <div class="p-3 board-bg-primary rounded-3">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="dl" strokeWidth={2} stroke="#8884d8" />
                <Line type="monotone" dataKey="sqt" strokeWidth={2} stroke="#8884d8" />
                <Line type="monotone" dataKey="bp" strokeWidth={2} stroke="#8884d8" />

                <CartesianGrid horizontal={true} vertical={false} stroke="#2d394a" strokeDasharray="4 5" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: "0.7em", fill: "#2d394a" }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: "0.7em", fill: "#2d394a" }} />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="p-3 board-bg-primary rounded-3">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart width={600} height={300} data={data1} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="uv" strokeWidth={2} stroke="#8884d8" />
                <CartesianGrid horizontal={true} vertical={false} stroke="#2d394a" strokeDasharray="4 5" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: "0.7em", fill: "#2d394a" }} />
                <YAxis axisLine={false} tickLine={false} unit="Kg" tick={{ fontSize: "0.7em", fill: "#2d394a" }} />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
