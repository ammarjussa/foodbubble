import React from 'react';
import UserProfileHeader from '../common/UserProfileHeader';
import { Form } from 'react-bootstrap';

const Notifications = () => {
  return (
    <>
      <UserProfileHeader />
      <div className="d-flex flex-column align-items-center profile-options">
        <p className="options-title">Notifications</p>
        <p>You are currently subscribed to receive the following emails at: User Email address</p>
        <div className="options-table">
          <Form className="d-flex flex-column">
            <div className="d-flex justify-content-around p-2">
              <p className="">Recipe Recommendations</p>
              <Form.Check className="switch-style" type="switch" id="custom-switch" />
            </div>
            <div className="d-flex justify-content-around p-2">
              <p>Product Updates</p>
              <Form.Check className="switch-style" type="switch" id="custom-switch2" />
            </div>
            <div className="d-flex justify-content-around p-2">
              <p>Promotional Updates</p>
              <Form.Check className="switch-style" type="switch" id="custom-switch3" />
            </div>
          </Form>
          <button className="align-self-center secondary-button">Save To Profile</button>
        </div>
      </div>
    </>
  );
};

export default Notifications;
