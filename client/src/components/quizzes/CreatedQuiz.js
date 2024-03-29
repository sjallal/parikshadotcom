import React, { Fragment } from "react";
import PropTypes from "prop-types";

function CreatedQuiz({ quiz }) {
  return (
    <Fragment>
      <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h3>{quiz.quizName}</h3>
          <p>{quiz.description}</p>
        </div>
        <div className="col-btn col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <i className="fas fa-plus-circle"> Questions</i>
        </div>
        <div className="col-btn col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <i className="fas fa-plus-circle"> Results</i>
        </div>
        <div className="col-btn col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <i className="fas fa-plus-circle"> Delete</i>
        </div>
      </div>
    </Fragment>
  );
}

CreatedQuiz.propTypes = {
  quiz: PropTypes.object.isRequired,
};

export default CreatedQuiz;
