import React from "react";
import { motion } from "framer-motion";
import img from "../assets/img/google.jpg";
const Hero = () => {
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
      <motion.div initial="hidden" animate="visible" variants={list} class="px-4 pt-5 my-5 text-center border-bottom">
        <motion.h1 variants={item} class="display-4 fw-bold board-text-primary">
          Lorem Ipsum
        </motion.h1>
        <div class="col-lg-6 mx-auto">
          <motion.p variants={item} class="lead mb-4 board-text-secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eaque officia inventore ut ipsa.
            Nesciunt eum, delectus voluptatibus est voluptatem cupiditate magni ipsum nisi in!
          </motion.p>
          <motion.div variants={item} class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">
              Dashboard
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              Secondary
            </button>
          </motion.div>
        </div>
        <div class="overflow-hidden" style={{ maxHeight: "30vh" }}>
          <div class="container px-5">
            <img
              src={img}
              class="img-fluid rounded-3 shadow-lg mb-4"
              alt="dashboard"
              width="700"
              height="500"
              loading="lazy"
            ></img>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
