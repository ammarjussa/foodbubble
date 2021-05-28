import React from 'react';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import imgMealPlanner from '../../assets/images/img-meal-planner.png';

const UserProfileHeader = () => {
  return (
    <div className="profile-header">
      <div className="d-flex flex-column align-items-center">
        <Avatar style={{ width: '10vw', height: '10vw' }} />
        <p className="main-title mt-4">User Name</p>
      </div>
      <div className="search-items">
        <p className="main-title">User Profile</p>
        <div className="profile-search">
          <input className="primary-input" type="text" placeholder="Search Recipes" />
          <SearchIcon className="search-icon" />
        </div>
      </div>
      <div className="d-flex flex-column">
        <img className="w-50 align-self-center" src={imgMealPlanner} alt="calendar icon" />
      </div>
    </div>
  );
};

export default UserProfileHeader;
