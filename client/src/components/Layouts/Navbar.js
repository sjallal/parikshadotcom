import React from "react";

export const Navbar = () => {
  return (
    <header id="main-header">
      <div className="container">
        <div className="row center-xs end-sm end-md end-lg end-lg middle-xs middle-sm middle-md middle-lg">
          <div className="col-xs-12 col-sm-4 col-md-2 col-lg-2">
            <a href="index.html">
              <h1>
                <span className="primary-text">Pariksha</span>.com
              </h1>
            </a>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-10 col-lg-10">
            <nav id="navbar">
              <ul>
                <li>
                  <a href="signin.html">
                    <i className="fas fa-sign-in-alt"></i> SignIn
                  </a>
                </li>
                <li>
                  <a href="signup.html">
                    <i className="fas fa-user-plus"></i> SignUp
                  </a>
                </li>
                <li>
                  <a href="classes.html">
                    <i className="fas fa-graduation-cap"></i> Classes
                  </a>
                </li>
                <li>
                  <a href="profile.html">
                    <i className="fas fa-user-circle"></i> Profile
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-sign-out-alt"></i> SignOut
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
