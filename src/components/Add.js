import React from "react";
import { useState } from "react";

const Add = ({ exercise, weight }) => {
  const [lifted, setLifted] = useState(weight);
  const handleNegative = (e) => {
    e.preventDefault();
    setLifted(lifted - 1);
  };
  const handlePositive = (e) => {
    e.preventDefault();
    setLifted(lifted + 1);
  };
  return (
    <div className="container ">
      <div className="row">
        <div className="col col-lg-3 mx-auto">
          <div className="p-3 board-bg-primary rounded-3 text-center">
            <div className="position-relative">
              <h6 className="board-text-primary">{exercise}</h6>
              <h1 className="board-text-secondary fw-light">
                {lifted}
                <small>kg</small>
              </h1>
              <button style={{ width: "50px" }} class="btn btn-danger" onClick={handleNegative} type="submit">
                -
              </button>
              <button style={{ width: "50px" }} class="btn btn-success" onClick={handlePositive} type="submit">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
