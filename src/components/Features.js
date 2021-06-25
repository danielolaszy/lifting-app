import { motion } from "framer-motion";
import { FaDumbbell, FaSyringe, FaBicycle } from "react-icons/fa";

const Features = ({ list, item }) => {
  return (
    <div class="container px-4" id="featured-3">
      <motion.div initial="hidden" animate="visible" variants={list} class="row g-4 py-4 row-cols-1 row-cols-lg-3">
        <motion.div variants={item} class="feature col">
          <FaDumbbell className="board-text-primary mb-2" style={{ width: "2.5em", height: "auto" }} />

          <h4 className="board-text-primary">Dolore Aspernatur</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam at culpa omnis aliquid harum iste dolorum
            odit repudiandae incidunt cum!
          </p>
        </motion.div>
        <motion.div variants={item} class="feature col">
          <FaBicycle className="board-text-primary mb-2" style={{ width: "2.5em", height: "auto" }} />
          <h4 className="board-text-primary">Quas Tenetur</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia excepturi impedit tenetur sit distinctio esse
            obcaecati, expedita pariatur?
          </p>
        </motion.div>
        <motion.div variants={item} class="feature col">
          <FaSyringe className="board-text-primary mb-2" style={{ width: "2.5em", height: "auto" }} />
          <h4 className="board-text-primary">Corrupti Consequatur</h4>
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
