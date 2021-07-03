import React from "react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const ProfilePanel = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  };

  return (
    <div className="col">
      <div className="p-3 rounded-3 text-center text-sm-start color-alt border ">
        <div className="d-grid gap-3">
          <img
            src="https://picsum.photos/200"
            className="img-fluid border mx-auto d-block rounded-circle"
            style={{ maxWidth: "100px" }}
            alt="profile"
          ></img>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          {/* currentUser ? <Component {...props} /> : <Redirect to="/login" /> */}
          <h3 className="text-center">{currentUser.email}</h3>
          <h6 className="text-center">Good job, you total lifts are 680lbs or 308kg </h6>
          <div>
            <input className="form-control form-control-sm" id="formFileSm" type="file"></input>
          </div>
          <Link to="/edit-profile" className="btn btn-primary">
            Edit Profile
          </Link>
          <button type="button" onClick={handleLogout} className="btn btn-danger">
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;
