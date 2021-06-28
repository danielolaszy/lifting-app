import { motion } from "framer-motion";
import { FaDumbbell, FaSyringe, FaBicycle } from "react-icons/fa";

const Features = ({ list, item }) => {
  return (
    <div className="container px-4" id="featured-3">
      <motion.div initial="hidden" animate="visible" variants={list} className="row g-4 py-4 row-cols-1 row-cols-lg-3">
        <motion.div variants={item} className="feature col">
          <FaDumbbell className="mb-2" style={{ width: "2.5em", height: "auto" }} />

          <h4 className="">Dolore Aspernatur</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam at culpa omnis aliquid harum iste dolorum
            odit repudiandae incidunt cum!
          </p>
        </motion.div>
        <motion.div variants={item} className="feature col">
          <FaBicycle className=" mb-2" style={{ width: "2.5em", height: "auto" }} />
          <h4 className="">Quas Tenetur</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia excepturi impedit tenetur sit distinctio esse
            obcaecati, expedita pariatur?
          </p>
        </motion.div>
        <motion.div variants={item} className="feature col">
          <FaSyringe className="mb-2" style={{ width: "2.5em", height: "auto" }} />
          <h4 className="">Corrupti Consequatur</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat soluta voluptatibus ut aut sint, culpa
            adipisci eveniet enim!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Features;
