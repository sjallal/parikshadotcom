import React, { Fragment } from "react";

export default function Company() {
  return (
    <Fragment>
      <section id="company">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <i className="fas fa-phone"></i> 987654321
                </li>
                <li>
                  <i className="fas fa-envelope"></i> support@pariksha.test
                </li>
                <li>
                  <i className="fas fa-map"></i> Kanyapur, Asansol - 713304
                </li>
              </ul>
            </div>
            <div className="col col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <h4>About Us</h4>
              <p>
                Pariksha is a quiz platform where teachers can conduct quizzes
                and students can attempt them remotely along with access to
                leaderboards, so that both the students and the teachers can
                track their progress.
              </p>
            </div>
            <div className="col col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <h4>Newsletter</h4>
              <p>Subscribe to our news letter and never miss an update.</p>
              <form action="">
                <input type="text" name="email" placeholder="Enter email" />
              </form>
              <button type="submit" name="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
