import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { getClassesNotEnrolled } from "../../actions/classes";

const Navbar = ({
  auth: { isLoggedIn, loading },
  logout,
  getClassesNotEnrolled,
}) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/classes" onClick={getClassesNotEnrolled}>
          <i className="fas fa-graduation-cap"></i> Classes
        </Link>
      </li>
      <li>
        <Link to="/user">
          <i className="fas fa-user-circle"></i> Profile
        </Link>
      </li>
      <li>
        <Link to="/signin" onClick={logout}>
          <i className="fas fa-sign-out-alt"></i> SignOut
        </Link>
      </li>
    </ul>
  );
  const guestLinks = (
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
    </ul>
  );
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
              {!loading && (isLoggedIn ? authLinks : guestLinks)}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  getClassesNotEnrolled: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout, getClassesNotEnrolled })(
  Navbar
);
