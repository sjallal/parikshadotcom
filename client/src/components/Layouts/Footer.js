import React, { Fragment } from "react";

export const Footer = () => {
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
                  <i className="fas fa-envelope"></i> support@apptheme.test
                </li>
                <li>
                  <i className="fas fa-map"></i> 400 Main st, Boston MA
                </li>
              </ul>
            </div>
            <div className="col col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <h4>About Us</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, odio eius! Est
                consequatur aperiam iusto commodi earum et tenetur dolores!
              </p>
            </div>
            <div className="col col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <h4>Newsletter</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, quod.</p>
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

      <footer id="main-footer">
        <div className="container">
          <div className="row center-xs center-sm center-md center-lg">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <p>Copyright &copy; 2020 | Pariksha</p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};
