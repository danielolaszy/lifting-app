const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "liftinclub",
});

app.post("/addlift", (req, res) => {
  console.log(req.body);
  const lifter_id = req.body.lifterId;
  const lifter_name = req.body.lifter;
  const exercise = req.body.exercise;
  const weight = req.body.weight;

  db.query(
    "INSERT INTO lift (lifter_id, lifter_name, exercise, weight) VALUES (?,?,?,?)",
    [lifter_id, lifter_name, exercise, weight],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/lifts", (req, res) => {
  db.query("SELECT * FROM lift", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
