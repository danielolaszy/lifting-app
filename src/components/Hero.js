import { motion } from "framer-motion";
import { BrowserRouter as Router, Link } from "react-router-dom";
import img from "../assets/img/google.jpg";

const Hero = ({ list, item }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={list}
      className="px-4 pt-5 my-5 text-center border-bottom bg-alt"
    >
      <motion.h1 variants={item} className="display-4 fw-bold">
        Lorem Ipsum
      </motion.h1>
      <div className="col-lg-6 mx-auto">
        <motion.p variants={item} className="lead mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eaque officia inventore ut ipsa. Nesciunt
          eum, delectus voluptatibus est voluptatem cupiditate magni ipsum nisi in!
        </motion.p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <motion.div variants={item}>
            <Link className="btn btn-primary btn-lg px-4 me-sm-3" to="/dashboard">
              Dashboard
            </Link>
          </motion.div>
          <motion.div variants={item}>
            <Link type="button" className="btn btn-outline-secondary btn-lg px-4" to="/">
              Log in
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
        <div className="container px-5">
          <img
            src={img}
            className="img-fluid rounded-3 shadow-lg mb-4"
            alt="dashboard"
            width="700"
            height="500"
            loading="lazy"
          ></img>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
