import React from "react";

const navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark mt-2 mb-4">
        <div className="container mt-4">
          <a className="navbar-brand text-uppercase" href="#">
            liftin.club
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" href="/">
                Home
              </a>
              <a className="nav-link" href="/dashboard">
                Dashboard
              </a>
              <button className="btn btn-outline-primary" type="submit">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar;
