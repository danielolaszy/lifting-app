import React from "react";
import PanelLiftAdd from "./PanelLiftAdd";

const PanelLift = (props) => {
  return (
    <div class="col ">
      <div class="p-3 board-bg-primary rounded-3 text-center text-sm-start ">
        <div className="position-relative">
          <PanelLiftAdd name={props.name} />
          <h6 className="board-text-primary">{props.name}</h6>
          <h1 className="board-text-secondary fw-light">{props.weight}kg</h1>
          <span class={"badge rounded-pill " + props.percentClass}>{props.percent}%</span>
        </div>
      </div>
    </div>
  );
};

export default PanelLift;
