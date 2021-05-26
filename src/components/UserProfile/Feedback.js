import React, { useState } from 'react';
import UserProfileHeader from '../common/UserProfileHeader';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');

  return (
    <>
      <UserProfileHeader />
      <div className="d-flex flex-column align-items-center feedback">
        <p className="secondary-title">Feedback</p>
        <p className="feedback-text text-center">
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
            <textarea
              className="feedback-textarea"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
            <button className="secondary-button mr-5 mt-5" onClick={() => console.log(feedback)}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
