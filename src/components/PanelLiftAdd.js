import React from "react";
import { useState } from "react";
import PanelLift from "./PanelLift";

const PanelLiftAdd = ({ exercise, lifter }) => {
  console.log({ exercise }, { lifter });
  return (
    <div className="container ">
      <div className="row">
        <div className="col-6 col-lg-3 mx-auto">
          <div className="p-3 board-bg-primary rounded-3 text-center text-sm-start ">
            <div className="d-grid gap-2">
              <div className="input-group ">
                <input type="number" className="form-control form-bg-primary border-0"></input>
                <span className="input-group-text form-bg-primary border-0">kg</span>
              </div>

              <select className="form-select form-bg-primary border-0" aria-label="Default select example">
                <option selected>Exercise</option>
                <option value="1">Deadlift</option>
                <option value="2">Squat</option>
                <option value="3">Bench Press</option>
              </select>

              <input className="btn btn-success" type="submit" value="Add"></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelLiftAdd;
