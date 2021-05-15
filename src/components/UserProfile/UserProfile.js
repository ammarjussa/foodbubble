import React from 'react';
import UserProfileHead from './UserProfileHead';

//Need separate components for repititive stuff

const UserProfile = () => {
  return (
    <div>
      <UserProfileHead />
      <div className="d-flex align-items-center user-profile">
        <div className="col-sm-3 d-flex flex-column justify-content-center align-items-center up-preference">
          <p>User Preferences</p>
          <div className="d-flex flex-column align-items-center mb-3">
            <p>Diet</p>
            <button className="up-add">Add</button>
          </div>
          <div className="d-flex flex-column align-items-center mb-3">
            <p>Avoidance</p>
            <button className="up-add">Add</button>
          </div>
          <div className="d-flex flex-column align-items-center mb-3">
            <p>Dislikes</p>
            <button className="up-add">Add</button>
          </div>
          <div className="d-flex flex-column align-items-center mb-3">
            <p>Nutrition</p>
            <button className="up-add">Add</button>
          </div>
          <div className="d-flex flex-column align-items-center mb-3">
            <p>Household</p>
            <button className="up-add">Add</button>
          </div>
          <div className="d-flex flex-column align-items-center mb-3">
            <p>Preferred Store</p>
            <button className="up-add">Add</button>
          </div>
          <div className="d-flex flex-column align-items-center mb-3">
            <p>Cooking Experience</p>
            <button className="up-add">Add</button>
          </div>
          <div className="d-flex flex-column align-items-center mb-3">
            <p>Favorite Cuisine</p>
            <button className="up-add">Add</button>
          </div>
        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-5">
          <div className="up-preference">
            <p>Exclude Ingredients</p>
          </div>
          <div>
            <p>User Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
