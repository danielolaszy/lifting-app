import React from "react";
import "../App.css";
import PanelLift from "./PanelLift";
import { ResponsiveLine } from "@nivo/line";

const dan = [
  {
    "id": "deadlift",

    "data": [
      {
        "x": "Jan 1",
        "y": 100,
      },
      {
        "x": "Jan 2",
        "y": 110,
      },
      {
        "x": "Jan 3",
        "y": 120,
      },
      {
        "x": "Jan 4",
        "y": 120,
      },
      {
        "x": "Jan 5",
        "y": 130,
      },
      {
        "x": "Jan 6",
        "y": 140,
      },
      {
        "x": "Jan 7",
        "y": 130,
      },
      {
        "x": "Jan 8",
        "y": 140,
      },
      {
        "x": "Jan 9",
        "y": 140,
      },
      {
        "x": "Jan 10",
        "y": 120,
      },
      {
        "x": "Jan 11",
        "y": 140,
      },
      {
        "x": "Jan 12",
        "y": 150,
      },
    ],
  },
  {
    "id": "squat",
    "color": "hsl(269, 70%, 50%)",
    "data": [
      {
        "x": "Jan 1",
        "y": 60,
      },
      {
        "x": "Jan 2",
        "y": 70,
      },
      {
        "x": "Jan 3",
        "y": 70,
      },
      {
        "x": "Jan 4",
        "y": 80,
      },
      {
        "x": "Jan 5",
        "y": 90,
      },
      {
        "x": "Jan 6",
        "y": 90,
      },
      {
        "x": "Jan 7",
        "y": 95,
      },
      {
        "x": "Jan 8",
        "y": 80,
      },
      {
        "x": "Jan 9",
        "y": 90,
      },
      {
        "x": "Jan 10",
        "y": 100,
      },
      {
        "x": "Jan 11",
        "y": 90,
      },
      {
        "x": "Jan 12",
        "y": 100,
      },
    ],
  },
  {
    "id": "benchpress",
    "color": "hsl(269, 70%, 50%)",
    "data": [
      {
        "x": "Jan 1",
        "y": 60,
      },
      {
        "x": "Jan 2",
        "y": 70,
      },
      {
        "x": "Jan 3",
        "y": 75,
      },
      {
        "x": "Jan 4",
        "y": 70,
      },
      {
        "x": "Jan 5",
        "y": 70,
      },
      {
        "x": "Jan 6",
        "y": 70,
      },
      {
        "x": "Jan 7",
        "y": 75,
      },
      {
        "x": "Jan 8",
        "y": 75,
      },
      {
        "x": "Jan 9",
        "y": 70,
      },
      {
        "x": "Jan 10",
        "y": 70,
      },
      {
        "x": "Jan 11",
        "y": 70,
      },
      {
        "x": "Jan 12",
        "y": 75,
      },
    ],
  },
];

const club = [
  {
    "id": "Dan",
    "color": "hsl(269, 70%, 50%)",
    "data": [
      {
        "x": "Jan 1",
        "y": 500,
      },
      {
        "x": "Jan 2",
        "y": 525,
      },
      {
        "x": "Jan 3",
        "y": 550,
      },
      {
        "x": "Jan 4",
        "y": 575,
      },
      {
        "x": "Jan 5",
        "y": 600,
      },
      {
        "x": "Jan 6",
        "y": 500,
      },
      {
        "x": "Jan 7",
        "y": 550,
      },
      {
        "x": "Jan 8",
        "y": 575,
      },
      {
        "x": "Jan 9",
        "y": 525,
      },
      {
        "x": "Jan 10",
        "y": 500,
      },
      {
        "x": "Jan 11",
        "y": 495,
      },
      {
        "x": "Jan 12",
        "y": 525,
      },
    ],
  },
  {
    "id": "Josh",
    "color": "hsl(269, 70%, 50%)",
    "data": [
      {
        "x": "Jan 1",
        "y": 750,
      },
      {
        "x": "Jan 2",
        "y": 770,
      },
      {
        "x": "Jan 3",
        "y": 790,
      },
      {
        "x": "Jan 4",
        "y": 810,
      },
      {
        "x": "Jan 5",
        "y": 800,
      },
      {
        "x": "Jan 6",
        "y": 790,
      },
      {
        "x": "Jan 7",
        "y": 825,
      },
      {
        "x": "Jan 8",
        "y": 850,
      },
      {
        "x": "Jan 9",
        "y": 785,
      },
      {
        "x": "Jan 10",
        "y": 820,
      },
      {
        "x": "Jan 11",
        "y": 850,
      },
      {
        "x": "Jan 12",
        "y": 875,
      },
    ],
  },
];

const theme = {
  "textColor": "#2d394a",
  "fontSize": 11,
  "axis": {
    "domain": {
      "line": {
        "stroke": "#ffffff",
        "strokeWidth": 0,
      },
    },
    "ticks": {
      "line": {
        "stroke": "#777777",
        "strokeWidth": 0,
      },
    },
  },
  "grid": {
    "line": {
      "stroke": "#2d394a",
      "strokeWidth": 1,
    },
  },
};
const Dashboard = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-3 row-cols-xl-6  g-2 g-lg-3">
        <PanelLift exercise="Deadlift" weight="120" lifter="Dan" percent="+5.6" percentClass="bg-success" />
        <PanelLift exercise="Squat" weight="100" lifter="Dan" percent="+8.5" percentClass="bg-success" />
        <PanelLift exercise="Bench Press" weight="75" lifter="Dan" percent="-2.7" percentClass="bg-danger" />
        <PanelLift exercise="Deadlift" weight="205" lifter="Josh" percent="+15.2" percentClass="bg-success" />
        <PanelLift exercise="Squat" weight="185" lifter="Josh" percent="+7.3" percentClass="bg-success" />
        <PanelLift exercise="Bench Press" weight="100" lifter="Josh" percent="+5.9" percentClass="bg-success" />
      </div>
      <div className="row row row-cols-1 row-cols-lg-6 g-2 g-lg-3 pt-2 pt-lg-3">
        <div className="col-lg-6">
          <div style={{ height: "300px" }} className="p-0 board-bg-primary rounded-3">
            <ResponsiveLine
              data={dan}
              theme={theme}
              margin={{ top: 25, right: 25, bottom: 50, left: 50 }}
              xScale={{ type: "point" }}
              yScale={{ type: "linear", min: "0", max: "auto", stacked: false, reverse: false }}
              yFormat=" >-.2f"
              curve="cardinal"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                orient: "bottom",
                tickSize: 0,
                tickPadding: 20,
                tickRotation: 0,
                legend: "",
                legendOffset: 7,
                legendPosition: "middle",
              }}
              axisLeft={{
                orient: "left",
                tickSize: 0,
                tickPadding: 18,
                tickRotation: 0,
                legend: "",
                legendOffset: -43,
                legendPosition: "middle",
              }}
              enableGridX={false}
              colors={{ scheme: "blues" }}
              pointSize={10}
              pointColor={{ from: "color", modifiers: [] }}
              pointBorderColor={{ from: "color", modifiers: [] }}
              pointLabelYOffset={-13}
              enableArea={true}
              areaBlendMode="overlay"
              areaOpacity={0.25}
              enableCrosshair={false}
              useMesh={true}
              legends={[]}
              motionConfig="stiff"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div style={{ height: "300px" }} className="p-0 board-bg-primary rounded-3">
            <ResponsiveLine
              data={dan}
              theme={theme}
              margin={{ top: 25, right: 25, bottom: 50, left: 50 }}
              xScale={{ type: "point" }}
              yScale={{ type: "linear", min: "0", max: "auto", stacked: false, reverse: false }}
              yFormat=" >-.2f"
              curve="cardinal"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                orient: "bottom",
                tickSize: 0,
                tickPadding: 20,
                tickRotation: 0,
                legend: "",
                legendOffset: 7,
                legendPosition: "middle",
              }}
              axisLeft={{
                orient: "left",
                tickSize: 0,
                tickPadding: 18,
                tickRotation: 0,
                legend: "",
                legendOffset: -43,
                legendPosition: "middle",
              }}
              enableGridX={false}
              colors={{ scheme: "blues" }}
              pointSize={10}
              pointColor={{ from: "color", modifiers: [] }}
              pointBorderColor={{ from: "color", modifiers: [] }}
              pointLabelYOffset={-13}
              enableArea={true}
              areaBlendMode="overlay"
              areaOpacity={0.25}
              enableCrosshair={false}
              useMesh={true}
              legends={[]}
              motionConfig="stiff"
            />
          </div>
        </div>
      </div>
      <div className="row row row-cols-1 row-cols-lg-6 g-2 g-lg-3 pt-2 pt-lg-3">
        <div className="col-lg-12">
          <div style={{ height: "400px" }} className="p-3 board-bg-primary rounded-3">
            <ResponsiveLine
              data={club}
              theme={theme}
              margin={{ top: 25, right: 25, bottom: 50, left: 50 }}
              xScale={{ type: "point" }}
              yScale={{ type: "linear", min: "0", max: "1000", stacked: false, reverse: false }}
              yFormat=" >-.2f"
              curve="cardinal"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                orient: "bottom",
                tickSize: 0,
                tickPadding: 20,
                tickRotation: 0,
                legend: "",
                legendOffset: 7,
                legendPosition: "middle",
              }}
              axisLeft={{
                orient: "left",
                tickSize: 0,
                tickPadding: 18,
                tickRotation: 0,
                legend: "",
                legendOffset: -43,
                legendPosition: "middle",
              }}
              enableGridX={false}
              colors={{ scheme: "blues" }}
              pointSize={10}
              pointColor={{ from: "color", modifiers: [] }}
              pointBorderColor={{ from: "color", modifiers: [] }}
              pointLabelYOffset={-13}
              enableArea={true}
              areaBlendMode="overlay"
              areaOpacity={0.25}
              enableCrosshair={false}
              useMesh={true}
              legends={[]}
              motionConfig="stiff"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
