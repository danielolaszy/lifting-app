import React from "react";
import PanelLiftAdd from "./PanelLiftAdd";

const PanelLift = ({ exercise, weight, percent, percentClass, lifter }) => {
  //   console.log({ name });
  const handleClick = (e) => {
    e.preventDefault();
    console.log({ exercise, lifter });
    return <PanelLiftAdd />;
  };
  return (
    <div className="col ">
      <div className="p-3 board-bg-primary rounded-3 text-center text-sm-start ">
        <div className="position-relative">
          <h4
            onClick={handleClick}
            className="position-absolute top-0 start-100 translate-middle board-text-secondary fw-light"
          >
            +
          </h4>
          {/* <PanelLiftAdd exercise={exercise} lifter={lifter} /> */}
          <h6 className="board-text-primary">{exercise}</h6>
          <h1 className="board-text-secondary fw-light">{weight}kg</h1>
          <span className={"badge rounded-pill " + percentClass}>{percent}%</span>
        </div>
      </div>
    </div>
  );
};

export default PanelLift;
