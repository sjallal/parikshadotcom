import React, { Fragment } from "react";

const Landing = () => {
  return (
    <Fragment>
      <section id='showcase'>
        <div className='container'>
          <div className='row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg'>
            <div className='showcase col-xs-10 col-sm-10 col-md-10 col-lg-10'>
              <h1>
                Welcome to <span className='primary-text'>Pariksha</span>.com
              </h1>
              <p>A website where you can take and attempt quizes.</p>
            </div>
          </div>
        </div>
      </section>

      <section id='features'>
        <div className='container'>
          <div className='row center-xs center-sm center-md center-lg'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <h2>Core Features</h2>
            </div>
          </div>
          <div className='row center-xs center-sm center-md center-lg'>
            <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
              <i className='fas fa-chalkboard-teacher'></i>
              <h3>Create a class</h3>
              <p>You can create your own class and add students into it.</p>
            </div>
            <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
              <i className='fas fa-plus-square'></i>
              <h3>Join a class</h3>
              <p>You can join any class once the creator approves you.</p>
            </div>
            <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
              <i className='fas fa-user-edit'></i>
              <h3>Create a Quiz</h3>
              <p>You can create your own quiz within your class.</p>
            </div>
          </div>
          <div className='row center-xs center-sm center-md center-lg'>
            <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
              <i className='fas fa-pencil-alt'></i>
              <h3>Attemp a quiz</h3>
              <p>You can attempt any quiz, based on your performance you'll get your marks.</p>
            </div>
            <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
              <i className='fas fa-history'></i>
              <h3>Quiz History</h3>
              <p>You can see your attempted quizes.</p>
            </div>
            <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
              <i className='fas fa-clipboard-list'></i>
              <h3>Leader Board</h3>
              <p>
                You can check the leader-board to know how well you performed compared to others.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Landing;
