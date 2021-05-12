import React from 'react';
import imgMealPlanner from '../../assets/images/img-meal-planner.png';
import { Avatar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const UserProfileOptions = () => {
  let history = useHistory();

  return (
    <div className="d-flex flex-column justify-content-center user-profile-options">
      <div className="d-flex justify-content-around align-items-end">
        <div className="m-5 p-4"></div>
        <p className="up-title">User Profile Options</p>
        <div>
          <img className="w-50" src={imgMealPlanner} alt="calendar icon" />
        </div>
      </div>
      <div className="options-board">
        <div className="ob-avatar">
          <Avatar className="p-4 avatar" />
          <p>User Name</p>
        </div>

        <div className="ob-form">
          <div className="d-flex justify-content-between ob-row">
            <p>Account</p>
            <input placeholder="User Email Address" type="text" />
            <img src="arrow.svg" alt="arrow" onClick={() => history.push('/')} />
          </div>
          <div className="d-flex justify-content-between ob-row">
            <p>Preferences</p>
            <img src="arrow.svg" alt="arrow" onClick={() => history.push('/')}/>
          </div>
          <div className="d-flex justify-content-between ob-row">
            <p>Notifications</p>
            <img src="arrow.svg" alt="arrow" onClick={() => history.push('/notifications')}/>
          </div>
          <div className="d-flex justify-content-between ob-row">
            <p>Feedback</p>
            <img src="arrow.svg" alt="arrow" onClick={() => history.push('/feedback')}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileOptions;
