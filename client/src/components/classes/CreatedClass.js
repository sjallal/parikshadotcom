import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { setCls } from "../../actions/classes";
import { connect } from "react-redux";

function CreatedClass({ classs, setCls }) {
  return (
    <Fragment>
      <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h3>{classs.className}</h3>
          <p>{classs.description}</p>
        </div>
        <div className="col-btn col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <i className="fas fa-edit"> INVITE</i>
        </div>
        <div className="col-btn col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <i className="fas fa-edit"> EDIT</i>
        </div>
        <Link
          to="/quizzes"
          className="col-btn col-xs-3 col-sm-3 col-md-3 col-lg-3"
          onClick={() => setCls(classs)}
        >
          <i className="fas fa-edit"> QUIZZES</i>
        </Link>
        <div className="col-btn col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <i className="fas fa-trash-alt"> DELETE</i>
        </div>
      </div>
    </Fragment>
  );
}

CreatedClass.propTypes = {
  classs: PropTypes.object.isRequired,
  setCls: PropTypes.func.isRequired,
};

export default connect(null, { setCls })(CreatedClass);
