import React from "react";

const PanelLiftAdd = (props) => {
  return (
    <>
      <h4
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        className="position-absolute top-0 start-100 translate-middle board-text-secondary fw-light"
      >
        +
      </h4>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {props.name}
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">input here...</div>

            <button type="button" class="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PanelLiftAdd;
