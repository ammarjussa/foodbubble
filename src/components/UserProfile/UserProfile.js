import React from 'react';
import UserProfileHead from './UserProfileHead';

const Preferences = ({ name }) => {
  return (
    <div className="d-flex flex-column align-items-center mb-3">
      <p>{name}</p>
      <button className="up-add">Add</button>
    </div>
  );
};

const UserProfile = () => {
  return (
    <div>
      <UserProfileHead />
      <div className="d-flex user-profile">
        <div className="col-sm-3 d-flex flex-column justify-content-center align-items-center up-preference">
          <p>User Preferences</p>
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
            <p>Exclude Ingredients</p>
            <div className="col-sm-4">
              <div className="d-flex flex-column pb-4">
                <p>Privacy</p>
                <div>
                  <input type="radio" name="privacy" />
                  <label for="private">Private</label>
                </div>
                <div>
                  <input type="radio" name="privacy" />
                  <label for="public">Public</label>
                </div>
              </div>
              <div className="d-flex flex-column pb-4">
                <p>Food Journal</p>
                <div>
                  <input type="radio" name="privacy" />
                  <label for="private">Private</label>
                </div>
                <div>
                  <input type="radio" name="privacy" />
                  <label for="public">Public</label>
                </div>
              </div>
              <div className="d-flex flex-column">
                <p>Default Measure</p>
                <div>
                  <input type="radio" name="privacy" />
                  <label for="metric">Metric</label>
                </div>
                <div>
                  <input type="radio" name="privacy" />
                  <label for="us">US</label>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-around">
            <div className="d-flex flex-column align-items-start">
              <p>User Details</p>
              <div>
                <label for="height">Height</label>
                <input className="up-input" type="text" />
              </div>
              <div>
                <label for="us">Weight (Kg)</label>
                <input placeholder="100" className="up-input" type="text" />
              </div>
              <div>
                <label for="us">Health Goals</label>
                <input placeholder="Active" className="up-input" type="text" />
              </div>
            </div>
            <div className="d-flex flex-column align-items-start">
              <p>Meal Times</p>
              <div>
                <label for="us">Breakfast At</label>
                <input placeholder="07:00" className="up-input" type="text" />
              </div>
              <div>
                <label for="us">Lunch At</label>
                <input placeholder="13:00" className="up-input" type="text" />
              </div>
              <div>
                <label for="us">Dinner At</label>
                <input placeholder="19:00" className="up-input" type="text" />
              </div>
            </div>
          </div>

          <div className="pt-5 d-flex justify-content-between align-items-end">
            <div className="d-flex flex-column">
              <p>TimeZone</p>
              <input placeholder="19:00" className="up-input" type="text" />
            </div>
            <button className="up-button">Save Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
