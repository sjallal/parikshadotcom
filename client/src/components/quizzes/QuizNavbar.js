import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { selectQuizAttempted, selectQuizUnattempted } from "../../actions/quiz";
import { Link } from "react-router-dom";

const QuizNavbar = ({
  navbarIndex,
  selectQuizAttempted,
  selectQuizUnattempted,
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
            to="/quizzes/student"
            className={`${
              navbarIndex === 0 ? "current" : ""
            } col col-xs-4 col-sm-4 col-md-4 col-lg-4`}
            onClick={selectQuizUnattempted}
          >
            Unattempted Quizzes
          </Link>
          <Link
            to="/quizzes/student"
            className={`${
              navbarIndex === 1 ? "current" : ""
            } col col-xs-4 col-sm-4 col-md-4 col-lg-4`}
            onClick={selectQuizAttempted}
          >
            Attempted Quizzes
          </Link>
        </div>
      </div>
    </section>
  );
};

QuizNavbar.propTypes = {
  navbarIndex: PropTypes.number.isRequired,
  selectQuizAttempted: PropTypes.func.isRequired,
  selectQuizUnattempted: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  navbarIndex: state.quiz.navbarIndex,
});

export default connect(mapStateToProps, {
  selectQuizAttempted,
  selectQuizUnattempted,
})(QuizNavbar);
