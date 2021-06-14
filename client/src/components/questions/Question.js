import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const Question = ({ question: { question, options, marks } }) => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <Fragment>
      <div class="row middle-xs middle-sm middle-md middle-lg">
        <div class="col-question col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h4>
            {question} [Marks: {marks}]
          </h4>
          {/* <h5>{selectedOption}</h5> */}
        </div>
        {options.map((option) => (
          <Fragment key={uuidv4()}>
            <div
              class={`${
                selectedOption === option ? `selected-opt` : `col-opt`
              } col-xs-12 col-sm-12 col-md-12 col-lg-12`}
              onClick={() => setSelectedOption(option)}
            >
              <h5>{option}</h5>
            </div>
            {/* <input
              type="checkbox"
              name="vehicle1"
              value="Bike"
              class="col-xs-1 col-sm-1 col-md-1 col-lg-1"
              onClickCapture={() => setSelectedOption(option.option)}
            />
            <label
              htmlFor="vehicle1"
              class="col-xs-10 col-sm-10 col-md-10 col-lg-10"
            >
              <h5>{option.option}</h5>
            </label> */}
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};

Question.propTypes = {
  question: PropTypes.object.isRequired,
};

export default connect(null, {})(Question);
