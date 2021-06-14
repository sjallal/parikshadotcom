import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  selectClassesCreated,
  selectClassesEnrolled,
  selectClassesNotEnrolled,
} from "../../actions/classes";

const ClassesNavbar = ({
  navbarIndex,
  selectClassesCreated,
  selectClassesEnrolled,
  selectClassesNotEnrolled,
}) => {
  return (
    <section id="classes-nav">
      <div className="container">
        <div
          className="
            row
            center-lg center-md center-sm center-xs
            middle-lg middle-md middle-sm middle-xs
          "
        >
          <Link
            to="/classes"
            className={`${
              navbarIndex === 0 ? "current" : ""
            } col col-xs-4 col-sm-4 col-md-4 col-lg-4`}
            onClick={selectClassesNotEnrolled}
          >
            Classes
          </Link>
          <Link
            to="/classes"
            className={`${
              navbarIndex === 1 ? "current" : ""
            } col col-xs-4 col-sm-4 col-md-4 col-lg-4`}
            onClick={selectClassesEnrolled}
          >
            Classes Enrolled
          </Link>
          <Link
            to="/classes"
            className={`${
              navbarIndex === 2 ? "current" : ""
            } col col-xs-4 col-sm-4 col-md-4 col-lg-4`}
            onClick={selectClassesCreated}
          >
            Classes Created
          </Link>
        </div>
      </div>
    </section>
  );
};

ClassesNavbar.propTypes = {
  navbarIndex: PropTypes.number.isRequired,
  selectClassesCreated: PropTypes.func.isRequired,
  selectClassesEnrolled: PropTypes.func.isRequired,
  selectClassesNotEnrolled: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  navbarIndex: state.classes.navbarIndex,
});

export default connect(mapStateToProps, {
  selectClassesCreated,
  selectClassesEnrolled,
  selectClassesNotEnrolled,
})(ClassesNavbar);
