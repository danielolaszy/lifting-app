import React from "react";

const Login = () => {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-2 board-bg-primary p-3 rounded-3 text-center text-sm-start color-alt border">
          <h4 className="text-center">Log In</h4>
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

export default Login;
