import "./App.css";
import { useAuth } from "./contexts/AuthContext";
import { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Privateroute from "./components/Privateroute";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  // const { currentUser } = useAuth();
  const user = firebase.auth().currentUser;

  const checkAuth = () => {
    if (user) {
      return (
        <Link className="nav-link" to="/Profile">
          Profile
        </Link>
      );
    } else {
      return (
        <Link className="nav-link" to="/login">
          Log In
        </Link>
      );
    }
  };

  return (
    <AuthProvider>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container mt-4">
            <Link className="navbar-brand text-uppercase" to="/">
              liftin.club
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
                {checkAuth()}
              </div>
            </div>
          </div>
        </nav>
        <Switch>
          <Privateroute path="/profile" component={Profile} isAuth={isAuth} />
          {/* <Route path="/profile" component={Profile} /> */}
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
