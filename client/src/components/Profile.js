import "../App.css";
import PanelLift from "./PanelLift";
import { ResponsiveLine } from "@nivo/line";
import { motion } from "framer-motion";
import ProfilePanel from "./ProfilePanel";

const Profile = ({ exercise, weight, lifter, percent }) => {
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-3  g-2 g-lg-3">
          <PanelLift exercise={exercise} weight={weight} lifter={lifter} percent={percent} percentClass="bg-success" />
          <PanelLift exercise={exercise} weight={weight} lifter={lifter} percent={percent} percentClass="bg-success" />
          <PanelLift exercise={exercise} weight={weight} lifter={lifter} percent={percent} percentClass="bg-danger" />
          <ProfilePanel />
        </div>
      </div>
    </>
  );
};

export default Profile;
