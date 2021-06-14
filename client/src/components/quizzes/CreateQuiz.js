import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { createQuiz } from "../../actions/quiz";
import PropTypes from "prop-types";

const CreateQuiz = ({ cls, createQuiz }) => {
  const [quizName, setQuizName] = useState("");
  const [description, setDescription] = useState("");
  const [totalMarks, setTotalMarks] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [option, setOption] = useState("");
  const [correctAns, setCorrectAns] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [marks, setMarks] = useState(0);
  return (
    <Fragment>
      <section id="page" className="classes">
        <div className="container">
          <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
            <div className="col col-xs-2 col-sm-2 col-md-2 col-lg-2">
              Quiz Name:
            </div>
            <input
              className="col col-xs-10 col-sm-10 col-md-10 col-lg-10"
              type="text"
              value={quizName}
              onChange={(e) => setQuizName(e.target.value)}
            />
            <div className="col col-xs-2 col-sm-2 col-md-2 col-lg-2">
              Description:
            </div>
            <input
              className="col col-xs-10 col-sm-10 col-md-10 col-lg-10"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          {questions.map((question) => (
            <Fragment key={question._id}>
              <div className="row middle-xs middle-sm middle-md middle-lg">
                <div className="col col-xs-9 col-sm-9 col-md-9 col-lg-9">
                  Question: {question.question}
                </div>
                <div className="col col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  Marks: {question.marks}
                </div>
                <div className="col col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  Options
                </div>
                <div className="col col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  Correct Answer: {question.correctAns}
                </div>
                {question.options.map((option) => (
                  <div
                    className="col col-xs-11 col-sm-11 col-md-11 col-lg-11"
                    key={uuidv4()}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </Fragment>
          ))}
          <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
            <div className="col col-xs-1 col-sm-1 col-md-1 col-lg-1">
              Question
            </div>
            <input
              className="col col-xs-10 col-sm-10 col-md-10 col-lg-10"
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <input
              className="col col-xs-1 col-sm-1 col-md-1 col-lg-1"
              type="number"
              value={marks === 0 ? "" : marks}
              placeholder="Marks"
              onChange={(e) => setMarks(e.target.value)}
            />
            <div className="col col-xs-12 col-sm-12 col-md-12 col-lg-12">
              Options
            </div>
            <div className="col col-xs-12 col-sm-12 col-md-12 col-lg-12">
              Correct Answer: {correctAns}
            </div>
            {options.map((option) => (
              <Fragment key={uuidv4()}>
                <div className="col col-xs-11 col-sm-11 col-md-11 col-lg-11">
                  {option}
                </div>
                <div
                  className="col-btn col-xs-1 col-sm-1 col-md-1 col-lg-1"
                  onClick={() => {
                    setCorrectAns(correctAns === option ? "" : correctAns);
                    return setOptions(options.filter((opt) => opt !== option));
                  }}
                >
                  delete
                </div>
              </Fragment>
            ))}
            <input
              className="col col-xs-8 col-sm-8 col-md-8 col-lg-8"
              type="text"
              placeholder="Add a new option"
              name="option"
              value={option}
              onChange={(e) => setOption(e.target.value)}
            />
            <input
              className="col col-xs-1 col-sm-1 col-md-1 col-lg-1"
              type="checkbox"
              name="isCorrect"
              checked={isChecked}
              onChange={() => {
                return setIsChecked(true);
              }}
            />
            <div
              className="col-btn col-xs-2 col-sm-2 col-md-2 col-lg-2"
              onClick={() => {
                if (isChecked) setCorrectAns(option);
                if (option) setOptions([...options, option]);
                setOption("");
                setIsChecked(false);
                return;
              }}
            >
              Add
            </div>
          </div>
          <div
            className="col-btn"
            onClick={() => {
              if (!question) return;
              if (!marks) return;
              if (!correctAns) return;
              if (options.length <= 1) return;
              const newQuestion = {
                _id: uuidv4(),
                marks,
                question,
                correctAns,
                options,
              };
              setTotalMarks(+totalMarks + +marks);
              setMarks(0);
              setQuestion("");
              setIsChecked(false);
              setOptions([]);
              setOption("");
              setCorrectAns("");
              return setQuestions([...questions, newQuestion]);
            }}
          >
            Add Question
          </div>
          <Link
            to="/quizzes"
            className="col-btn"
            onClick={() => {
              if (!quizName) {
                console.log("quizName");
                return;
              }
              if (!description) {
                console.log("description");
                return;
              }
              if (totalMarks === 0) {
                console.log("totalMarks");

                return;
              }
              const newQuiz = {
                quizName,
                description,
                questions,
                totalMarks,
              };
              console.log(newQuiz);
              createQuiz(newQuiz, cls._id);
              return;
            }}
          >
            Submit
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

CreateQuiz.propTypes = {
  cls: PropTypes.object.isRequired,
  createQuiz: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cls: state.classes.cls,
});

export default connect(mapStateToProps, { createQuiz })(CreateQuiz);
