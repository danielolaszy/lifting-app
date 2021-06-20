import React from "react";

const navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand text-uppercase" href="#">
            liftin.club
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <a class="nav-link active" href="#">
                Home
              </a>
              <a class="nav-link" href="#">
                Features
              </a>
              <a class="nav-link" href="#">
                Pricing
              </a>
              <a class="nav-link" href="#">
                Disabled
              </a>
              <button class="btn btn-outline-primary" type="submit">
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
