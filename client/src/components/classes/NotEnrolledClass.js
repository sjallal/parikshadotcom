import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  // getClassesEnrolled,
  // getClassesNotEnrolled,
  joinClass,
} from "../../actions/classes";

function NotEnrolledClass({ classs, joinClass }) {
  return (
    <Fragment>
      <div
        className="
            row
            center-xs center-sm center-md center-lg
            middle-xs middle-sm middle-md middle-lg
          "
      >
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h3>{classs.className}</h3>
          <p>{classs.description}</p>
        </div>
        <div
          className="col-btn col-xs-12 col-sm-12 col-md-12 col-lg-12"
          onClick={() => {
            joinClass(classs._id);
          }}
        >
          <i className="fas fa-plus-circle"> JOIN</i>
        </div>
      </div>
    </Fragment>
  );
}

NotEnrolledClass.propTypes = {
  classs: PropTypes.object.isRequired,
  joinClass: PropTypes.func.isRequired,
  // getClassesEnrolled: PropTypes.func.isRequired,
  // getClassesNotEnrolled: PropTypes.func.isRequired,
};

export default connect(null, {
  joinClass,
  // getClassesEnrolled,
  // getClassesNotEnrolled,
})(NotEnrolledClass);
