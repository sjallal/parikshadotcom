import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ClassesNavbar from "./ClassesNavbar";
import Spinner from "../layouts/Spinner";
import {
  getClassesCreated,
  getClassesEnrolled,
  getClassesNotEnrolled,
} from "../../actions/classes";
import NotEnrolledClass from "./NotEnrolledClass";
import EnrolledClass from "./EnrolledClass";
import CreatedClass from "./CreatedClass";
import NoClasses from "./NoClasses";

function Class({
  classes,
  getClassesCreated,
  getClassesEnrolled,
  getClassesNotEnrolled,
}) {
  useEffect(() => {
    getClassesNotEnrolled();
    getClassesEnrolled();
    getClassesCreated();
  }, [getClassesNotEnrolled, getClassesEnrolled, getClassesCreated]);

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
              <div class="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
                <div class="col-btn col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <h3>Create a new Class</h3>
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

  // return classes.loading ? (
  //   <Spinner />
  // ) : classes.navbarIndex === 0 ? (
  //   <Fragment>
  //     <ClassesNavbar />
  //     {classes.classesNotEnrolled.length < 1 ? (
  //       <NoClasses />
  //     ) : (
  //       <section id="page" className="classes">
  //         <div className="container">
  //           {classes.classesNotEnrolled.map((classs) => (
  //             <NotEnrolledClass key={classs._id} classs={classs} />
  //           ))}
  //         </div>
  //       </section>
  //     )}
  //   </Fragment>
  // ) : classes.navbarIndex === 1 ? (
  //   <Fragment>
  //     <ClassesNavbar />
  //     {classes.classesEnrolled.length < 1 ? (
  //       <NoClasses />
  //     ) : (
  //       <section id="page" className="classes">
  //         <div className="container">
  //           {classes.classesEnrolled.map((classs) => (
  //             <EnrolledClass key={classs._id} classs={classs} />
  //           ))}
  //         </div>
  //       </section>
  //     )}
  //   </Fragment>
  // ) : (
  //   <Fragment>
  //     <ClassesNavbar />
  //     <section id="page" className="classes">
  //       <div className="container">
  //         <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
  //           <div className="col-btn col-xs-12 col-sm-12 col-md-12 col-lg-12">
  //             <i className="fas fa-edit"> CREATE A NEW CLASS</i>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //     {classes.classesCreated.length < 1 ? (
  //       <NoClasses />
  //     ) : (
  //       <section id="page" className="classes">
  //         <div className="container">
  //           {classes.classesCreated.map((classs) => (
  //             <CreatedClass key={classs._id} classs={classs} />
  //           ))}
  //         </div>
  //       </section>
  //     )}
  //   </Fragment>
  // );
}

const mapStateToProps = (state) => ({
  classes: state.classes,
});

Class.propTypes = {
  classes: PropTypes.object.isRequired,
  getClassesCreated: PropTypes.func.isRequired,
  getClassesEnrolled: PropTypes.func.isRequired,
  getClassesNotEnrolled: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  getClassesCreated,
  getClassesEnrolled,
  getClassesNotEnrolled,
})(Class);
