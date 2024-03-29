import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadUser } from "../../actions/auth";
const User = ({ user, loadUser }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);
  return (
    <Fragment>
      <section id="sub-header">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h1>Profile</h1>
            </div>
          </div>
        </div>
      </section>

      <section id="page" className="profile">
        <div className="container">
          <div className="row center-xs center-sm center-md center-lg">
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
              <h2>
                <span className="primary-text">Your</span> Profile
              </h2>
              <form>
                <div>
                  <label htmlFor="fname">First Name</label>
                  <br />
                  <input
                    type="text"
                    name="fname"
                    id=""
                    value={user.fname}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="lname">Last Name</label>
                  <br />
                  <input
                    type="text"
                    name="lname"
                    id=""
                    value={user.lname}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    id=""
                    value={user.email}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="email">About</label>
                  <br />
                  <input
                    type="text"
                    name="about"
                    id=""
                    value={user.about}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="email">Total Percentage Score</label>
                  <br />
                  <input
                    type="number"
                    name="tps"
                    id=""
                    value={user.totalPercentageScore}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="email">Total Quizes Attempted</label>
                  <br />
                  <input
                    type="number"
                    name="tqa"
                    id=""
                    value={user.totalQuizesAttempted}
                    readOnly
                  />
                </div>
                <button type="submit">Save Profile</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

User.propTypes = {
  user: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { loadUser })(User);
