import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import Spinner from "../layouts/Spinner";
import Question from "./Question";
import { submitQuiz } from "../../actions/quiz";
import { Link } from "react-router-dom";

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
function Questions({ quiz, submitQuiz }) {
  // const [totalMarksScored, setTotalMarksScored] = useState(0);
  let total = 0;
  const getMarks = (marks) => {
    // console.log(`marks: ${marks}`);
    // setTotalMarksScored(+totalMarksScored + +marks);
    total += +marks;
    // console.log(`total: ${total}`);
  };

  return (
    <Fragment>
      <section id="page" className="classes">
        <div className="container">
          <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
            <div className="col-btn col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h3>
                {quiz.quizName} [Total Marks: {quiz.totalMarks}]
              </h3>
            </div>
            <div className="col-btn col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h4>{quiz.description}</h4>
            </div>
          </div>
          {quiz.questions.map((question) => {
            return (
              <Question
                key={question._id}
                question={question}
                getMarks={getMarks}
              />
            );
          })}
          <Link
            to="/quizzes/student"
            className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg"
            onClick={() => {
              // console.log(`totalMarksScored: ${total}`);
              submitQuiz(total, quiz);
              return;
            }}
          >
            <div className="col-btn col-xs-12 col-sm-12 col-md-12 col-lg-12">
              Submit Quiz
            </div>
          </Link>
        </div>
      </section>
    </Fragment>
  );
}

Questions.propTypes = {
  quiz: PropTypes.object.isRequired,
  submitQuiz: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  quiz: state.quiz.quiz,
});

export default connect(mapStateToProps, { submitQuiz })(Questions);
