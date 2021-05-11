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
      </div>
    </>
  );
};

export default Feedback;
