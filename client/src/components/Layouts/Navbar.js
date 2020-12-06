import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header id="main-header">
      <div className="container">
        <div className="row center-xs end-sm end-md end-lg end-lg middle-xs middle-sm middle-md middle-lg">
          <div className="col-xs-12 col-sm-4 col-md-2 col-lg-2">
            <Link to="/">
              <h1>
                <span className="primary-text">Pariksha</span>.com
              </h1>
            </Link>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-10 col-lg-10">
            <nav id="navbar">
              <ul>
                <li>
                  <Link to="/signin">
                    <i className="fas fa-sign-in-alt"></i> SignIn
                  </Link>
                </li>
                <li>
                  <Link to="/signup">
                    <i className="fas fa-user-plus"></i> SignUp
                  </Link>
                </li>
                <li>
                  <Link to="/classes">
                    <i className="fas fa-graduation-cap"></i> Classes
                  </Link>
                </li>
                <li>
                  <Link to="/profile">
                    <i className="fas fa-user-circle"></i> Profile
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fas fa-sign-out-alt"></i> SignOut
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
