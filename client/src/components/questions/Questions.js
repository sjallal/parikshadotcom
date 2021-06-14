import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import Spinner from "../layouts/Spinner";
import Question from "./Question";

// const sampleQuestions = [
//   {
//     question: "How cloud is made",
//     _id: 1,
//     options: [
//       {
//         option: "Cloud is made of liquid",
//         isCorrect: "false",
//         isSelected: "",
//       },
//       {
//         option: "Cloud is made of solid",
//         flag: "false",
//       },
//       {
//         option: "Cloud is made of gas",
//         flag: "true",
//       },
//       {
//         option: "Cloud is made of carbon",
//         flag: "false",
//       },
//     ],
//     marks: 10,
//   },
//   {
//     question: "What is Cloud",
//     _id: 2,
//     options: [
//       {
//         option: "Cloud is blue",
//         isCorrect: "false",
//         isSelected: "",
//       },
//       {
//         option: "Cloud is Yellow",
//         flag: "false",
//       },
//       {
//         option: "Cloud is red",
//         flag: "true",
//       },
//       {
//         option: "Cloud is pink",
//         flag: "false",
//       },
//     ],
//     marks: 10,
//   },
// ];
function Questions({ quiz: { quizName, description, totalMarks, questions } }) {
  return (
    <Fragment>
      <section id="page" className="classes">
        <div className="container">
          <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
            <div className="col-btn col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h3>
                {quizName} [Total Marks: {totalMarks}]
              </h3>
            </div>
            <div className="col-btn col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h4>{description}</h4>
            </div>
          </div>
          {questions.map((question) => {
            return <Question key={question._id} question={question} />;
          })}
          <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
            <div className="col-btn col-xs-12 col-sm-12 col-md-12 col-lg-12">
              Submit Quiz
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

Questions.propTypes = {
  quiz: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  quiz: state.quiz.quiz,
});

export default connect(mapStateToProps)(Questions);
