import React from 'react';
import UserProfileHead from './UserProfileHead';

const Preferences = ({ name }) => {
  return (
    <div className="d-flex flex-column align-items-center mb-4">
      <p className="secondary-title">{name}</p>
      <button className="primary-button align-self-center add">Add</button>
    </div>
  );
};

const UserProfile = () => {
  return (
    <div>
      <UserProfileHead />
      <div className="d-flex user-profile">
        <div className="col-sm-3 d-flex flex-column justify-content-center align-items-center up-preference">
          <p className="secondary-title">User Preferences</p>
          <Preferences name="Diet" />
          <Preferences name="Avoidances" />
          <Preferences name="Dislikes" />
          <Preferences name="Nutrition" />
          <Preferences name="Household" />
          <Preferences name="Preferred Store" />
          <Preferences name="Cooking experience" />
          <Preferences name="Favorite Cuisine" />
        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-5 d-flex flex-column justify-content-center">
          <div className="up-preference">
            <p className="secondary-title">Exclude Ingredients</p>
            <div className="col-sm-4">
              <div className="d-flex flex-column pb-4">
                <p className="secondary-title">Privacy</p>
                <div className="d-flex">
                  <input className="mt-1" type="radio" name="privacy" />
                  <label className="pl-2" for="private">
                    Private
                  </label>
                </div>
                <div className="d-flex">
                  <input className="mt-1" type="radio" name="privacy" />
                  <label className="pl-2" for="public">
                    Public
                  </label>
                </div>
              </div>
              <div className="d-flex flex-column pb-4">
                <p className="secondary-title">Food Journal</p>
                <div className="d-flex">
                  <input className="mt-1" type="radio" name="privacy" />
                  <label className="pl-2" for="private">
                    Private
                  </label>
                </div>
                <div className="d-flex">
                  <input className="mt-1" type="radio" name="privacy" />
                  <label className="pl-2" for="public">
                    Public
                  </label>
                </div>
              </div>
              <div className="d-flex flex-column">
                <p className="secondary-title">Default Measure</p>
                <div className="d-flex">
                  <input className="mt-1" type="radio" name="privacy" />
                  <label className="pl-2" for="metric">
                    Metric
                  </label>
                </div>
                <div>
                  <input className="mt-1" type="radio" name="privacy" />
                  <label className="pl-2" for="us">
                    US
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-around">
            <div className="d-flex flex-column align-items-start">
              <p className="secondary-title">User Details</p>
              <div className="d-flex flex-column">
                <label for="height">Height</label>
                <input className="primary-input" type="text" />
              </div>
              <div className="d-flex flex-column mt-2">
                <label for="us">Weight (Kg)</label>
                <input placeholder="100" className="primary-input" type="text" />
              </div>
              <div className="d-flex flex-column mt-2">
                <label for="us">Health Goals</label>
                <input placeholder="Active" className="primary-input" type="text" />
              </div>
            </div>
            <div className="d-flex flex-column align-items-start">
              <p className="secondary-title">Meal Times</p>
              <div className="d-flex flex-column">
                <label for="us">Breakfast At</label>
                <input placeholder="07:00" className="primary-input" type="text" />
              </div>
              <div className="d-flex flex-column mt-2">
                <label for="us">Lunch At</label>
                <input placeholder="13:00" className="primary-input" type="text" />
              </div>
              <div className="d-flex flex-column mt-2">
                <label for="us">Dinner At</label>
                <input placeholder="19:00" className="primary-input" type="text" />
              </div>
            </div>
          </div>

          <div className="pt-5 d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column">
              <p className="secondary-title">TimeZone</p>
              <input placeholder="19:00" className="primary-input" type="text" />
            </div>
            <button className="primary-button">Save Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
