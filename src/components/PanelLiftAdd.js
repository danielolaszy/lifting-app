import React from "react";

const PanelLiftAdd = ({ name }) => {
  console.log({ name });
  return (
    <>
      <h4
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        className="position-absolute top-0 start-100 translate-middle board-text-secondary fw-light"
      >
        +
      </h4>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {name}
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">input here...</div>

            <button type="button" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PanelLiftAdd;
