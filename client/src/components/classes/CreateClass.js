import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

function CreateClass(props) {
  const [className, setClassName] = useState("");
  return (
    <Fragment>
      <section id="page" className="classes">
        <div className="container">
          <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
            <div className="col col-xs-2 col-sm-2 col-md-2 col-lg-2">
              Class Name:
            </div>
            <input
              className="col col-xs-8 col-sm-8 col-md-8 col-lg-8"
              type="text"
              placeholder="Enter class name"
              name="className"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
}

CreateClass.propTypes = {};

export default CreateClass;
