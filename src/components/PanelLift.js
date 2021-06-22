import React from "react";
import Add from "./Add";
import PanelLiftAdd from "./PanelLiftAdd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const PanelLift = ({ exercise, weight, percent, percentClass, lifter }) => {
  return (
    <Router>
      <Route exact path="/add" children={<PanelLiftAdd exercise={exercise} weight={weight} />} />
      <div className="col ">
        <div className="p-3 board-bg-primary rounded-3 text-center text-sm-start ">
          <div className="position-relative">
            <h4 className="position-absolute top-0 start-100 translate-middle board-text-secondary fw-light">
              <Link className="text-decoration-none text-reset" to="/add">
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
    </Router>
  );
};

export default PanelLift;
