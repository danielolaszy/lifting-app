import { motion } from "framer-motion";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import img from "../assets/img/google.jpg";

const Hero = ({ list, item }) => {
  return (
    <Router>
      <motion.div initial="hidden" animate="visible" variants={list} class="px-4 pt-5 my-5 text-center border-bottom">
        <motion.h1 variants={item} class="display-4 fw-bold board-text-primary">
          Lorem Ipsum
        </motion.h1>
        <div class="col-lg-6 mx-auto">
          <motion.p variants={item} class="lead mb-4 board-text-secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eaque officia inventore ut ipsa.
            Nesciunt eum, delectus voluptatibus est voluptatem cupiditate magni ipsum nisi in!
          </motion.p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <motion.div variants={item}>
              <Link class="btn btn-primary btn-lg px-4 me-sm-3" to="/dashboard">
                Dashboard
              </Link>
            </motion.div>
            <motion.div variants={item}>
              <Link type="button" class="btn btn-outline-secondary btn-lg px-4" to="/">
                Log in
              </Link>
            </motion.div>
          </div>
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
    </Router>
  );
};

export default Hero;
