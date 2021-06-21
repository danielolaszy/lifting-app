import React from "react";
import PanelLiftAdd from "./PanelLiftAdd";

const PanelLift = ({ name, weight, percent, percentClass }) => {
  //   console.log({ name });
  return (
    <div className="col ">
      <div className="p-3 board-bg-primary rounded-3 text-center text-sm-start ">
        <div className="position-relative">
          <PanelLiftAdd name={name} />
          <h6 className="board-text-primary">{name}</h6>
          <h1 className="board-text-secondary fw-light">{weight}kg</h1>
          <span className={"badge rounded-pill " + percentClass}>{percent}%</span>
        </div>
      </div>
    </div>
  );
};

export default PanelLift;
