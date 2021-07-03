import { motion } from "framer-motion";
import firebase from "firebase/app";
import "firebase/auth";
import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const PanelLiftAdd = ({ exercise, lifter }) => {
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

  const [weight, setWeight] = useState(0);
  const user = firebase.auth().currentUser;

  const addWeight = () => {
    Axios.post("http://localhost:3001/addlift", {
      lifterId: user.uid,
      lifter: lifter,
      exercise: exercise,
      weight: weight,
    }).then(() => {
      console.log("success");
    });
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={list} className="col">
      <div className="p-3 board-bg-primary rounded-3 text-center text-sm-start color-alt border">
        <div className="position-relative" style={{ height: "7em" }}>
          <h4 className="position-absolute top-0 start-100 translate-middle board-text-secondary fw-light">
            <Link className="text-decoration-none text-reset" to="/profile">
              -
            </Link>
          </h4>
          <motion.h6 variants={item} className="board-text-primary">
            {exercise}
          </motion.h6>
          <div className="d-grid gap-2">
            <motion.div variants={item} className="input-group ">
              <input
                pattern="[0-9]*"
                inputMode="numeric"
                placeholder={weight}
                className="form-control form-bg-primary border"
                onChange={(event) => {
                  setWeight(event.target.value);
                }}
              ></input>
              <span className="input-group-text form-bg-primary border">kg</span>
            </motion.div>
            <motion.input
              variants={item}
              onClick={addWeight}
              className="btn btn-success"
              type="submit"
              value="Add"
            ></motion.input>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PanelLiftAdd;
