import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-6 col-sm-5 col-md-4 col-lg-3 col-xl-2 board-bg-primary p-3 rounded-3 text-center text-sm-start color-alt border">
          <h4 className="text-center">Log In</h4>
          {error && (
            <div class="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="position-relative">
              <div className="d-grid gap-3">
                <div>
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" ref={emailRef}></input>
                </div>
                <div>
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" ref={passwordRef}></input>
                </div>

                <button disabled={loading} type="submit" className="btn btn-primary ">
                  Log In
                </button>
              </div>
            </div>
          </form>
        </div>
        <p className="text-center mt-2">Don't have an account? Sign up</p>
      </div>
    </>
  );
};

export default Login;
