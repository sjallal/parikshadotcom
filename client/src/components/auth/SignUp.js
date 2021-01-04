import React, { Fragment, useState } from "react";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signUp } from "../../actions/auth";

const SignUp = ({ setAlert, signUp }) => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    password2: "",
    about: "",
  });

  const { fname, lname, email, password, password2, about } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords did not matched", "danger");
    } else {
      // console.log(formData);
      signUp({ fname, lname, email, password, about });
    }
  };

  return (
    <Fragment>
      <section id='sub-header'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <h1>SignUp</h1>
            </div>
          </div>
        </div>
      </section>

      <section id='page' className='signup'>
        <div className='container'>
          <div className='row center-xs center-sm center-md center-lg'>
            <div className='col-xs-10 col-sm-10 col-md-10 col-lg-10'>
              <h2>
                <span className='primary-text'>Let's</span> become a part of our family
              </h2>
              <p>Please fill the below form</p>
              <form onSubmit={(e) => onSubmit(e)}>
                <div className='form-group'>
                  <input
                    type='text'
                    name='fname'
                    placeholder='First Name'
                    value={fname}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    name='lname'
                    placeholder='Last Name'
                    value={lname}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Enter Email'
                    value={email}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    name='password'
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e) => onChange(e)}
                    required
                    minLength='4'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    name='password2'
                    placeholder='Re-type Password'
                    value={password2}
                    onChange={(e) => onChange(e)}
                    required
                    minLength='4'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    name='about'
                    placeholder='About yourself'
                    value={about}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className='form-group'>
                  <button type='submit'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, signUp })(SignUp);
