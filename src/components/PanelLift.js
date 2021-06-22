import React from "react";
import PanelLiftAdd from "./PanelLiftAdd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const PanelLift = ({ exercise, weight, percent, percentClass, lifter }) => {
  //   console.log({ name });
  const handleClick = (e) => {
    e.preventDefault();
    console.log({ exercise, lifter });
  };
  return (
    <div className="col ">
      <div className="p-3 board-bg-primary rounded-3 text-center text-sm-start ">
        <div className="position-relative">
          <h4
            onClick={handleClick}
            className="position-absolute top-0 start-100 translate-middle board-text-secondary fw-light"
          >
            <Link className="text-decoration-none text-reset" to="/test">
              +
            </Link>
          </h4>

          {/* <PanelLiftAdd exercise={exercise} lifter={lifter} /> */}
          <h6 className="board-text-primary">{exercise}</h6>
          <h1 className="board-text-secondary fw-light">
            {weight}
            <small>kg</small>
          </h1>
          <span className={"badge rounded-pill " + percentClass}>{percent}%</span>
        </div>
      </div>
    </div>
  );
};

export default PanelLift;
