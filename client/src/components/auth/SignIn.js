import React, { Fragment, useState } from "react";
// import axios from "axios";

export const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    // const config = {
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // };
    // const body = JSON.stringify(formData);
    // try {
    //   const res = await axios.post("api/auth", body, config);
    //   console.log(res.data);
    // } catch (err) {
    //   console.error(err.response.data);
    // }
    console.log("SUCCESS");
  };

  return (
    <Fragment>
      <section id="sub-header">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h1>SignIn</h1>
            </div>
          </div>
        </div>
      </section>

      <section id="page" className="signin">
        <div className="container">
          <div className="row center-xs center-sm center-md center-lg">
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
              <h2>
                <span className="primary-text">Please</span> provide the login credentials
              </h2>
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => onChange(e)}
                    required
                    minLength="4"
                  />
                </div>
                <button type="submit">SignIn</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
