import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function AttemptedQuiz({ quiz, user }) {
  let score = 0;
  for (let i = 0; i < quiz.scores.length; i++)
    if (quiz.scores[i].user === user._id) score = quiz.scores[i].score;
  return (
    <Fragment>
      <div class="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h3>{quiz.quizName}</h3>
          <p>{quiz.description}</p>
        </div>
        <div class="col-btn col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <i class="fas fa-plus-circle"> SEE QUESTIONS</i>
        </div>
        <div class="col-btn col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <i class="fas fa-plus-circle"> Score: {score}</i>
        </div>
      </div>
    </Fragment>
  );
}

AttemptedQuiz.propTypes = {
  quiz: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(AttemptedQuiz);
