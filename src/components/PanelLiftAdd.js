import React from "react";
import { useState } from "react";
import PanelLift from "./PanelLift";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const PanelLiftAdd = ({ exercise, lifter, weight }) => {
  console.log({ exercise }, { lifter });
  return (
    <div className="container ">
      <div className="row">
        <div className="col-12 mx-auto">
          <div className="p-3 board-bg-primary rounded-3 text-center text-sm-start ">
            <div className="position-relative">
              <h4 className="position-absolute top-0 start-100 translate-middle board-text-secondary fw-light">
              <Link className="text-decoration-none text-reset" to="/dashboard">
                -
              </Link>
            </h4>
            <h6 className="board-text-primary">{exercise}</h6>
            <div className="d-grid gap-1">
              <div className="input-group ">
                <input pattern="[0-9]*" inputMode="numeric" placeholder={weight} className="form-control form-bg-primary border-0"></input>
                <span className="input-group-text form-bg-primary border-0">kg</span>
              </div>

              <input className="btn btn-success" type="submit" value="Add"></input>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelLiftAdd;
