import React from "react";

const Features = () => {
  return (
    <>
      <div className="container">
        <div className="row g-4 py-5 my-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="feature-icon bg-primary bg-gradient">
              <svg className="bi" width="1em" height="1em"></svg>
            </div>
            <h2 className="text-light">Featured title</h2>
            <p>
              Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and
              probably just keep going until we run out of words.
            </p>
          </div>
          <div className="feature col">
            <div className="feature-icon bg-primary bg-gradient">
              <svg className="bi" width="1em" height="1em"></svg>
            </div>
            <h2 className="text-light">Featured title</h2>
            <p>
              Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and
              probably just keep going until we run out of words.
            </p>
          </div>
          <div className="feature col">
            <div className="feature-icon bg-primary bg-gradient">
              <svg className="bi" width="1em" height="1em"></svg>
            </div>
            <h2 className="text-light">Featured title</h2>
            <p>
              Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and
              probably just keep going until we run out of words.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;