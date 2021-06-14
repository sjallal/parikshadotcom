import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { setQuiz } from "../../actions/quiz";
import { connect } from "react-redux";

function UnattemptedQuiz({ quiz, setQuiz }) {
  return (
    <Fragment>
      <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h3>{quiz.quizName}</h3>
          <p>{quiz.description}</p>
        </div>
        <Link
          to="/questions"
          className="col-btn col-xs-12 col-sm-12 col-md-12 col-lg-12"
          onClick={() => {
            setQuiz(quiz);
          }}
        >
          <i className="fas fa-plus-circle"> ATTEMPT</i>
        </Link>
      </div>
    </Fragment>
  );
}

UnattemptedQuiz.propTypes = {
  quiz: PropTypes.object.isRequired,
  setQuiz: PropTypes.func.isRequired,
};

export default connect(null, { setQuiz })(UnattemptedQuiz);
