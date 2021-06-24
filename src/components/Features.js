import React from "react";
import { FaDumbbell, FaSyringe, FaBicycle } from "react-icons/fa";
const Features = () => {
  return (
    <>
      <div class="container px-4" id="featured-3">
        <div class="row g-4 py-4 row-cols-1 row-cols-lg-3">
          <div class="feature col">
            <FaSyringe className="board-text-primary mb-2" style={{ width: "2.5em", height: "auto" }} />
            <h4 className="board-text-primary">Featured title</h4>
            <p>
              Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and
              probably just keep going until we run out of words.
            </p>
          </div>
          <div class="feature col">
            <FaDumbbell className="board-text-primary mb-2" style={{ width: "2.5em", height: "auto" }} />
            <h4 className="board-text-primary">Featured title</h4>
            <p>
              Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and
              probably just keep going until we run out of words.
            </p>
          </div>
          <div class="feature col">
            <FaBicycle className="board-text-primary mb-2" style={{ width: "2.5em", height: "auto" }} />
            <h4 className="board-text-primary">Featured title</h4>
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
