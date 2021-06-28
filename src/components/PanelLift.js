import { motion } from "framer-motion";
import PanelLiftAdd from "./PanelLiftAdd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const PanelLift = ({ exercise, weight, percent, percentClass, lifter }) => {
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
    <Router>
      <Route exact path="/add" children={<PanelLiftAdd exercise={exercise} weight={weight} lifter={lifter} />} />
      <Route
        path="/dashboard"
        render={() => (
          <motion.div initial="hidden" animate="visible" variants={list} className="col">
            <div className="p-3 board-bg-primary rounded-3 text-center text-sm-start color-alt border">
              <div className="position-relative" style={{ height: "7em" }}>
                <h4 className="position-absolute top-0 start-100 translate-middle board-text-secondary fw-light">
                  <Link className="text-decoration-none text-reset" to="/add">
                    +
                  </Link>
                </h4>
                <motion.h6 variants={item} className="board-text-primary">
                  {exercise}
                </motion.h6>
                <motion.h1 variants={item} className="board-text-secondary fw-light">
                  {weight}
                  <small>kg</small>
                </motion.h1>
                <motion.span variants={item} className={"badge rounded-pill " + percentClass}>
                  {percent}%
                </motion.span>
              </div>
            </div>
          </motion.div>
        )}
      />
    </Router>
  );
};

export default PanelLift;
