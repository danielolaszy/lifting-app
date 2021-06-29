import "../App.css";
import PanelLift from "./PanelLift";
import { ResponsiveLine } from "@nivo/line";
import { motion } from "framer-motion";
import ProfilePanel from "./ProfilePanel";
import Privateroute from "./Privateroute";

const Profile = () => {
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-3  g-2 g-lg-3">
          <PanelLift exercise="Deadlift" weight={140} user="Dan" percent="+5.6" percentClass="bg-success" />
          <PanelLift exercise="Squat" weight={100} user="Dan" percent="+8.5" percentClass="bg-success" />
          <PanelLift exercise="Bench Press" weight={75} user="Dan" percent="-2.7" percentClass="bg-danger" />
          <ProfilePanel />
        </div>
      </div>
    </>
  );
};

export default Profile;
