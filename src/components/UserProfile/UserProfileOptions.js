import React from 'react';
import imgMealPlanner from '../../assets/images/img-meal-planner.png';

const UserProfileOptions = () => {
  return (
    <>
      <div className="d-flex justify-content-around align-items-end user-profile-options">
        <div></div>
        <p className="up-title">User Profile Options</p>

        <div>
          <img className="w-50" src={imgMealPlanner} alt="calendar icon" />
        </div>
      </div>
    </>
  );
};

export default UserProfileOptions;
