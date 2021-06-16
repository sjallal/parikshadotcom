import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layouts/Spinner";

function LeaderBoard({ cls }) {
  let rank = 0;

  return cls.loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <section id="page" className="classes">
        <div className="container">
          <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
            <div className="col-btn col-xs-2 col-sm-2 col-md-2 col-lg-2">
              Rank
            </div>
            <div className="col-btn col-xs-3 col-sm-3 col-md-3 col-lg-3">
              Name
            </div>
            <div className="col-btn col-xs-3 col-sm-3 col-md-3 col-lg-3">
              Email
            </div>
            <div className="col-btn col-xs-2 col-sm-2 col-md-2 col-lg-2">
              %Score
            </div>
            <div className="col-btn col-xs-2 col-sm-2 col-md-2 col-lg-2">
              Quizzes Attempted
            </div>
            {cls.cls.leaderBoard
              .sort(function (a, b) {
                return (
                  b.percentageScore / b.quizzesAttempted -
                  a.percentageScore / a.quizzesAttempted
                );
              })
              .map((leaderboard) => (
                <Fragment key={leaderboard._id}>
                  <div className="col col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    {(rank += 1)}
                  </div>
                  <div className="col col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    {leaderboard.user.fname + " " + leaderboard.user.lname}
                  </div>
                  <div className="col col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    {leaderboard.user.email}
                  </div>
                  <div className="col col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    {leaderboard.quizzesAttempted === 0
                      ? 0
                      : +leaderboard.percentageScore /
                        +leaderboard.quizzesAttempted}
                  </div>
                  <div className="col col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    {leaderboard.quizzesAttempted}
                  </div>
                </Fragment>
              ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
}

LeaderBoard.propTypes = {
  cls: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  cls: state.classes,
});

export default connect(mapStateToProps)(LeaderBoard);
