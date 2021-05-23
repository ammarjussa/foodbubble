import React from 'react';
import imgMealPlanner from '../../assets/images/img-meal-planner.png';
import { Avatar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import SearchHeader from '../common/SearchHeader';
import ContinueButton from '../common/ContinueButton';

const UserProfileOptions = () => {
  let history = useHistory();

  return (
    <div className="d-flex flex-column justify-content-center user-profile-options">
      <div className="d-flex justify-content-around align-items-end">
        <div className="m-5 p-4"></div>
        <p className="main-title">User Profile Options</p>
        <div>
          <img className="w-50" src={imgMealPlanner} alt="calendar icon" />
        </div>
      </div>
      {/* <SearchHeader title="User Profile Options"/> */}
      <div className="options-board">
        <div className="ob-avatar">
          <Avatar className="p-4 avatar" />
          <p className="main-title mt-3">User Name</p>
        </div>

        <div className="ob-form">
          <div className="d-flex justify-content-between ob-row">
            <p>Account</p>
            <input placeholder="User Email Address" type="text" />
            <ContinueButton onClick={() => history.push('/')} />
          </div>
          <div className="d-flex justify-content-between ob-row">
            <p>Preferences</p>
            <ContinueButton onClick={() => history.push('/preference')} />
          </div>
          <div className="d-flex justify-content-between ob-row">
            <p>Notifications</p>
            <ContinueButton onClick={() => history.push('/notifications')} />
          </div>
          <div className="d-flex justify-content-between ob-row">
            <p>Feedback</p>
            <ContinueButton onClick={() => history.push('/feedback')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileOptions;
