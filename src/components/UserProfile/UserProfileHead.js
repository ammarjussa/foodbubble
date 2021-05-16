import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import imgMealPlanner from '../../assets/images/img-meal-planner.png';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';

const UserProfileHead = () => {
  return (
    <div>
      <div className="d-flex justify-content-around profile-header">
        <div className="d-flex flex-column align-items-center">
          <Avatar className="p-4" style={{ height: '120px', width: '120px' }} />
          <p className="mt-4">User Name</p>
        </div>

        <div>
          <p>User Profile</p>
          <div className="profile-search">
            <input type="text" placeholder="Search Recipes" />
            <SearchIcon className="search-icon" />
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <img className="w-50" src={imgMealPlanner} alt="calendar icon" />
          <Link className="search-link" to="/">
            View Planner
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfileHead;