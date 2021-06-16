import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { setCls, unEnrollClass } from "../../actions/classes";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function EnrolledClass({ classs, unEnrollClass, setCls }) {
  return (
    <Fragment>
      <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h3>{classs.className}</h3>
          <p>{classs.description}</p>
        </div>
        <Link
          to="/quizzes/student"
          className="col-btn col-xs-4 col-sm-4 col-md-4 col-lg-4"
          onClick={() => {
            setCls(classs);
          }}
        >
          <i className="fas fa-edit"> QUIZZES</i>
        </Link>
        <Link
          to="/leaderboard"
          className="col-btn col-xs-4 col-sm-4 col-md-4 col-lg-4"
          onClick={() => {
            setCls(classs);
          }}
        >
          <i className="fas fa-edit"> LEADERBOARD</i>
        </Link>
        <div
          className="col-btn col-xs-4 col-sm-4 col-md-4 col-lg-4"
          onClick={() => {
            unEnrollClass(classs._id);
          }}
        >
          <i className="fas fa-trash-alt"> LEAVE</i>
        </div>
      </div>
    </Fragment>
  );
}

EnrolledClass.propTypes = {
  classs: PropTypes.object.isRequired,
  unEnrollClass: PropTypes.func.isRequired,
  setCls: PropTypes.func.isRequired,
};

export default connect(null, {
  unEnrollClass,
  setCls,
})(EnrolledClass);
