import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getQuizzes } from "../../actions/quiz";
// import NoClasses from "../classes/NoClasses";
import CreatedQuiz from "./CreatedQuiz";
import { Link } from "react-router-dom";
import Spinner from "../layouts/Spinner";

function Quizzes({ cls, user, quiz: { quizzes, error, loading }, getQuizzes }) {
  useEffect(() => {
    getQuizzes(cls._id);
  }, [getQuizzes, cls._id]);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <section id="page" className="classes">
        <div className="container">
          <Link
            to="create-quiz"
            className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg"
          >
            <div className="col-btn col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h3>Create a new Quiz</h3>
            </div>
          </Link>
          {quizzes.map((quiz) => (
            <CreatedQuiz key={quiz._id} quiz={quiz} />
          ))}
        </div>
      </section>
    </Fragment>
  );
}

Quizzes.propTypes = {
  cls: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  quiz: PropTypes.object.isRequired,
  getQuizzes: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cls: state.classes.cls,
  user: state.auth.user,
  quiz: state.quiz,
});

export default connect(mapStateToProps, { getQuizzes })(Quizzes);
