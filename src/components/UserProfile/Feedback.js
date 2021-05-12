import React from 'react';
import UserProfileHeader from '../common/UserProfileHeader';

const Feedback = () => {
  return (
    <>
      <UserProfileHeader />
      <div className="d-flex flex-column align-items-center feedback">
        <p className="feedback-title">Feedback</p>
        <p className="feedback-text">
          We work hard to provide you with the best customer experience possible. <br />
          Please send any improvements you would like to see.
        </p>
        <div className="feedback-form">
          <div className="d-flex align-items-start">
            <p>User Email Address</p>
            <button className="feedback-emailbutton">Auto complete user email address</button>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-start">
            <p>Details</p>
            <textarea className="feedback-textarea"></textarea>
            <button className="feedback-save-button">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
