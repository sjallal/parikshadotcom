import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAttemptedUnattemptedQuizzes } from "../../actions/quiz";
import NoClasses from "../classes/NoClasses";
import UnattemptedQuiz from "./UnattemptedQuiz";
import QuizNavbar from "./QuizNavbar";
import Spinner from "../layouts/Spinner";
import AttemptedQuiz from "./AttemptedQuiz";

function AttemptedUnattemptedQuizzes({
  cls,
  getAttemptedUnattemptedQuizzes,
  quiz: { attemptedQuizzes, unattemptedQuizzes, loading, navbarIndex },
}) {
  useEffect(() => {
    getAttemptedUnattemptedQuizzes(cls._id);
  }, [getAttemptedUnattemptedQuizzes, cls._id]);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <QuizNavbar />
      <section id="page" className="classes">
        <div className="container">
          {navbarIndex === 0 ? (
            unattemptedQuizzes.length < 1 ? (
              <NoClasses />
            ) : (
              unattemptedQuizzes.map((quiz) => (
                <UnattemptedQuiz key={quiz._id} quiz={quiz} />
              ))
            )
          ) : attemptedQuizzes.length < 1 ? (
            <NoClasses />
          ) : (
            attemptedQuizzes.map((quiz) => (
              <AttemptedQuiz key={quiz._id} quiz={quiz} />
            ))
          )}
        </div>
      </section>
    </Fragment>
  );
}

AttemptedUnattemptedQuizzes.propTypes = {
  cls: PropTypes.object.isRequired,
  quiz: PropTypes.object.isRequired,
  getAttemptedUnattemptedQuizzes: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cls: state.classes.cls,
  quiz: state.quiz,
});

export default connect(mapStateToProps, { getAttemptedUnattemptedQuizzes })(
  AttemptedUnattemptedQuizzes
);
