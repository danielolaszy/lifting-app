import React from "react";
import img from "../assets/img/liftin.png";
const Hero = () => {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5 my-5 text-light">
        <div className="row flex-lg-row-reverse align-items-center g-5 my-4 py-5">
          <div className="col-lg-6">
            <img
              src={img}
              className="d-block mx-lg-auto img-fluid rounded-3"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            ></img>
          </div>
          <div className="col-lg-6">
            <h1 className="display-2 fw-bold lh-1 mb-3">Landing Template for Startups</h1>
            <p className="lead">
              Our landing page template works on all devices, and browsers, so you only have to set it up once, and get
              beautiful results forever.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
