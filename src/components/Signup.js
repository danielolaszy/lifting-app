import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Signup = () => {
  //   const { signup } = useAuth();

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     signup(email);
  //   };
  return (
    <>
      <div className="row">
        <div className="col-2 board-bg-primary p-3 rounded-3 text-center text-sm-start ">
          <form>
            <div className="position-relative">
              <div className="d-grid gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                ></input>
                <input type="password" placeholder="Password" class="form-control" id="exampleInputPassword1"></input>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label class="form-check-label" for="flexCheckDefault">
                    Remember
                  </label>
                </div>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
