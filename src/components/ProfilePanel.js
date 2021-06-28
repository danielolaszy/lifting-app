import React from "react";

const ProfilePanel = () => {
  return (
    <div className="col">
      <div className="p-3 rounded-3 text-center text-sm-start color-alt border ">
        <div className="d-grid gap-3">
          <img
            src="https://picsum.photos/200"
            className="img-fluid border mx-auto d-block rounded-circle"
            style={{ maxWidth: "100px" }}
          ></img>
          <h3 className="text-center">Dan</h3>
          <h6 className="text-center">Good job, you total lifts are 680lbs </h6>

          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;
