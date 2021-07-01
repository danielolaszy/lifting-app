import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const { signup } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-6 col-sm-5 col-md-4 col-lg-3 col-xl-2 board-bg-primary p-3 rounded-3 text-center text-sm-start color-alt border">
          <h4 className="text-center">Sign Up</h4>
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
                <div>
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password-confirm"
                    ref={passwordConfirmRef}
                  ></input>
                </div>
                <button disabled={loading} type="submit" className="btn btn-primary ">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
        <p className="text-center mt-2">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </>
  );
};

export default Signup;
