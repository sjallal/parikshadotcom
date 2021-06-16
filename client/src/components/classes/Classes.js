import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ClassesNavbar from "./ClassesNavbar";
import Spinner from "../layouts/Spinner";
import {
  createClass,
  getClassesCreated,
  getClassesEnrolled,
  getClassesNotEnrolled,
} from "../../actions/classes";
import NotEnrolledClass from "./NotEnrolledClass";
import EnrolledClass from "./EnrolledClass";
import CreatedClass from "./CreatedClass";
import NoClasses from "./NoClasses";
// import { Link } from "react-router-dom";

function Class({
  classes,
  getClassesCreated,
  getClassesEnrolled,
  getClassesNotEnrolled,
  createClass,
}) {
  useEffect(() => {
    getClassesNotEnrolled();
    getClassesEnrolled();
    getClassesCreated();
  }, [getClassesNotEnrolled, getClassesEnrolled, getClassesCreated]);

  const [className, setClassName] = useState("");
  const [description, setDescription] = useState("");

  return classes.loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <ClassesNavbar />
      <section id="page" className="classes">
        <div className="container">
          {classes.navbarIndex === 0 ? (
            classes.classesNotEnrolled.length < 1 ? (
              <NoClasses />
            ) : (
              classes.classesNotEnrolled.map((classs) => (
                <NotEnrolledClass key={classs._id} classs={classs} />
              ))
            )
          ) : classes.navbarIndex === 1 ? (
            classes.classesEnrolled.length < 1 ? (
              <NoClasses />
            ) : (
              classes.classesEnrolled.map((classs) => (
                <EnrolledClass key={classs._id} classs={classs} />
              ))
            )
          ) : (
            <Fragment>
              <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
                <div className="col col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  Class name:
                </div>
                <input
                  className="col col-xs-10 col-sm-10 col-md-10 col-lg-10"
                  type="text"
                  placeholder="Enter class name"
                  name="className"
                  value={className}
                  onChange={(e) => setClassName(e.target.value)}
                />
                <div className="col col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  Class description:
                </div>
                <input
                  className="col col-xs-10 col-sm-10 col-md-10 col-lg-10"
                  type="text"
                  placeholder="Enter class description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <div
                  className="col-btn col-xs-12 col-sm-12 col-md-12 col-lg-12"
                  onClick={() => {
                    createClass(className, description);
                    setClassName("");
                    setDescription("");
                    return;
                  }}
                >
                  Create a new Class
                </div>
              </div>
              {classes.classesCreated.length < 1 ? (
                <NoClasses />
              ) : (
                classes.classesCreated.map((classs) => (
                  <CreatedClass key={classs._id} classs={classs} />
                ))
              )}
            </Fragment>
          )}
        </div>
      </section>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  classes: state.classes,
});

Class.propTypes = {
  classes: PropTypes.object.isRequired,
  getClassesCreated: PropTypes.func.isRequired,
  getClassesEnrolled: PropTypes.func.isRequired,
  getClassesNotEnrolled: PropTypes.func.isRequired,
  createClass: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  getClassesCreated,
  getClassesEnrolled,
  getClassesNotEnrolled,
  createClass,
})(Class);
