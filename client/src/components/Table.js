import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";

const Table = () => {
  const [liftsList, setLiftsList] = useState([]);

  const getLifts = () => {
    Axios.get("http://localhost:3001/lifts").then((response) => {
      setLiftsList(response.data);
    });
  };
  useEffect(() => {
    getLifts();
  }, []);

  return (
    <>
      <div className="col">
        <div className="p-3 rounded-3 text-center text-sm-start color-alt border ">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Lifter</th>
                <th scope="col">Exercise</th>
                <th scope="col">Weight</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {liftsList.map((lift) => {
                return (
                  <>
                    <tr>
                      <th key={lift.id} scope="row">
                        {lift.id}
                      </th>
                      <td>{lift.lifter_name}</td>
                      <td>{lift.exercise}</td>
                      <td>
                        {lift.weight}
                        <small> kg</small>
                      </td>
                      <td>
                        <button type="button" class="btn btn-success">
                          Edit
                        </button>
                        <button type="button" class="btn btn-danger">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
