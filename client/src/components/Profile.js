import "../App.css";
import { useState, useEffect } from "react";
import PanelLift from "./PanelLift";
import ProfilePanel from "./ProfilePanel";
import Table from "./Table";
import Axios from "axios";

const Profile = () => {
  const [deadlift, setDeadlift] = useState({});
  const [squat, setSquat] = useState({});
  const [benchPress, setBenchPress] = useState({});

  const getDeadlifts = () => {
    Axios.get("http://localhost:3001/lifts").then((response) => {
      response.data.forEach((lift) => {
        if (lift.lifter_id === "mbsN9DPx5kYs2NLDt52BhGaqbqq2" && lift.exercise === "Deadlift") {
          setDeadlift(lift);
        }
      });
    });
  };

  const getSquat = () => {
    Axios.get("http://localhost:3001/lifts").then((response) => {
      response.data.forEach((lift) => {
        if (lift.lifter_id === "mbsN9DPx5kYs2NLDt52BhGaqbqq2" && lift.exercise === "Squat") {
          setSquat(lift);
        }
      });
    });
  };

  const getBenchPress = () => {
    Axios.get("http://localhost:3001/lifts").then((response) => {
      response.data.forEach((lift) => {
        if (lift.lifter_id === "mbsN9DPx5kYs2NLDt52BhGaqbqq2" && lift.exercise === "Bench Press") {
          setBenchPress(lift);
        }
      });
    });
  };

  useEffect(() => {
    getDeadlifts();
    getSquat();
    getBenchPress();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-3  g-2 g-lg-3">
          <PanelLift
            exercise="Deadlift"
            weight={deadlift.weight}
            lifter="Dan"
            percent="5.6%"
            percentClass="bg-success"
          />
          <PanelLift exercise="Squat" weight={squat.weight} lifter="Dan" percent="5.6%" percentClass="bg-success" />
          <PanelLift
            exercise="Bench Press"
            weight={benchPress.weight}
            lifter="Dan"
            percent="5.6%"
            percentClass="bg-danger"
          />
          <ProfilePanel />
        </div>
        <Table />
      </div>
    </>
  );
};

export default Profile;
