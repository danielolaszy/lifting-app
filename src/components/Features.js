import React from "react";
import { motion } from "framer-motion";
import { FaDumbbell, FaSyringe, FaBicycle } from "react-icons/fa";
const Features = () => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };
  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -50 },
  };
  return (
    <>
      <div class="container px-4" id="featured-3">
        <motion.div initial="hidden" animate="visible" variants={list} class="row g-4 py-4 row-cols-1 row-cols-lg-3">
          <motion.div variants={item} class="feature col">
            <FaSyringe className="board-text-primary mb-2" style={{ width: "2.5em", height: "auto" }} />
            <h4 className="board-text-primary">Featured title</h4>
            <p>
              Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and
              probably just keep going until we run out of words.
            </p>
          </motion.div>
          <motion.div variants={item} class="feature col">
            <FaDumbbell className="board-text-primary mb-2" style={{ width: "2.5em", height: "auto" }} />
            <h4 className="board-text-primary">Featured title</h4>
            <p>
              Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and
              probably just keep going until we run out of words.
            </p>
          </motion.div>
          <motion.div variants={item} class="feature col">
            <FaBicycle className="board-text-primary mb-2" style={{ width: "2.5em", height: "auto" }} />
            <h4 className="board-text-primary">Featured title</h4>
            <p>
              Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and
              probably just keep going until we run out of words.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Features;
