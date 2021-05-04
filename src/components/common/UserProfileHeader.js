import React from 'react';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import imgMealPlanner from '../../assets/images/img-meal-planner.png';

const UserProfileHeader = () => {
  return (
    <div className="d-flex justify-content-around">
      <div>
        <Avatar />
        <p>Username</p>
      </div>
      <div>
        <p>User Profile</p>
        <div>
          <input type="text" placeholder="Search Recipes" />
          <SearchIcon />
        </div>
      </div>
      <div>
        <img src={imgMealPlanner} alt="calendar icon" />
      </div>
    </div>
  );
};

export default UserProfileHeader;
