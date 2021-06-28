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
      <div className="row d-flex justify-content-center">
        <div className="col-2 board-bg-primary p-3 rounded-3 text-center text-sm-start color-alt border">
          <h4 className="text-center">Sign Up</h4>
          <form>
            <div className="position-relative">
              <div className="d-grid gap-3">
                <div>
                  <label for="exampleInputEmail1" class="form-label">
                    Email
                  </label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                </div>
                <div>
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input type="password" class="form-control" id="exampleInputPassword1"></input>
                </div>
                <div>
                  <label for="exampleInputPassword1" class="form-label">
                    Confirm Password
                  </label>
                  <input type="password" class="form-control" id="exampleInputPassword1"></input>
                </div>

                <button type="submit" class="btn btn-primary ">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;