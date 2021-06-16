import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const Question = ({
  question: { question, options, marks, correctAns },
  getMarks,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [flag, setFlag] = useState(false);
  let opted = "";

  const setMarks = () => {
    // console.log(`opted: ${opted}`);
    // console.log(`correctAns: ${correctAns}`);
    if (opted === correctAns && flag === false) {
      setFlag(true);
      getMarks(marks);
    } else if (opted !== correctAns && flag === true) {
      setFlag(false);
      getMarks(-marks);
    }
  };

  return (
    <Fragment>
      <div className="row middle-xs middle-sm middle-md middle-lg">
        <div className="col-question col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h4>
            {question} [Marks: {marks}]
          </h4>
          {/* <h5>{selectedOption}</h5> */}
        </div>
        {options.map((option) => (
          <Fragment key={uuidv4()}>
            <div
              className={`${
                selectedOption === option ? `selected-opt` : `col-opt`
              } col-xs-12 col-sm-12 col-md-12 col-lg-12`}
              onClick={() => {
                setSelectedOption(option);
                opted = option;
                setMarks();
                return;
              }}
            >
              <h5>{option}</h5>
            </div>
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};

Question.propTypes = {
  question: PropTypes.object.isRequired,
  getMarks: PropTypes.func.isRequired,
};

export default connect(null, {})(Question);
