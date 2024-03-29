import React, { useState } from 'react';
import UserProfileHead from './UserProfileHead';
import HelpIcon from '@material-ui/icons/Help';
import { useHistory } from 'react-router-dom';

const Preferences = ({ name, link }) => {
  const history = useHistory();

  const Navigate = () => {
    history.push(`/${link}`);
  };

  return (
    <div className="d-flex flex-column align-items-center mb-4">
      <p className="secondary-title">{name}</p>
      <button className="primary-button align-self-center add" onClick={Navigate}>
        Add
      </button>
    </div>
  );
};

const UserProfile = () => {
  const [privacy, setPrivacy] = useState('');
  const [journal, setJournal] = useState('');
  const [measures, setMeasures] = useState('');

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [goals, setGoals] = useState('');
  const [breakfast, setBreakfast] = useState('');
  const [lunch, setLunch] = useState('');
  const [dinner, setDinner] = useState('');
  const [zone, setZone] = useState('');

  return (
    <div>
      <UserProfileHead />
      <div className="d-flex user-profile">
        <div className="col-sm-3 d-flex flex-column justify-content-center align-items-center up-preference">
          <div className="d-flex">
            <p className="secondary-title">User Preferences</p>
            <HelpIcon className="help-1 ml-2" />
            <div className="primary-input div-1">
              <p className="help-text">
                Your diet is private. Only you can see it. Diets would be applied to all your
                search. results. Turn on or off anytime
              </p>
            </div>
          </div>

          <Preferences name="Diet" link="dietary" />
          <Preferences name="Avoidances" link="avoidance" />
          <Preferences name="Dislikes" link="profile" />
          <Preferences name="Nutrition" link="nutrition" />
          <Preferences name="Household" link="household" />
          <Preferences name="Preferred Store" link="preference" />
          <Preferences name="Cooking experience" link="experience" />
          <Preferences name="Favorite Cuisine" link="cuisine" />
        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-5 d-flex flex-column justify-content-center">
          <div className="up-preference">
            <div className="d-flex">
              <p className="secondary-title">Exclude Ingredients</p>
              <HelpIcon className="help-2 ml-1" />
              <div className="primary-input div-2">
                <p className="help-text pl-2">Add items that you dislike and want to avoid</p>
              </div>
            </div>

            <div className="col-sm-4 mt-4">
              <div className="d-flex flex-column pb-4">
                <div className="d-flex">
                  <p className="secondary-title">Privacy</p>
                  <HelpIcon className="help-3" />
                  <div className="primary-input div-3">
                    <p className="help-text pl-2">
                      Your excluded Ingredients are private. Only you can see it. Excluded
                      ingredients would be applied to all search results. Turn on or off any time.
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <input
                    className="mt-1"
                    type="radio"
                    name="privacy"
                    value="private"
                    onChange={(e) => setPrivacy(e.target.value)}
                  />
                  <label className="pl-2" for="private">
                    Private
                  </label>
                </div>
                <div className="d-flex">
                  <input
                    className="mt-1"
                    type="radio"
                    name="privacy"
                    value="public"
                    onChange={(e) => setPrivacy(e.target.value)}
                  />
                  <label className="pl-2" for="public">
                    Public
                  </label>
                </div>
              </div>
              <div className="d-flex flex-column pb-4 mt-4">
                <div className="d-flex">
                  <p className="secondary-title">Food Journal</p>
                  <HelpIcon className="help-3 mr-5" />
                  <div className="primary-input div-4">
                    <p className="help-text pl-2">
                      If public, other users can see your food journal entries. Great way to share
                      your food stories.
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <input
                    className="mt-1"
                    type="radio"
                    name="journal"
                    value="private"
                    onChange={(e) => setJournal(e.target.value)}
                  />
                  <label className="pl-2" for="private">
                    Private
                  </label>
                </div>
                <div className="d-flex">
                  <input
                    className="mt-1"
                    type="radio"
                    name="journal"
                    value="public"
                    onChange={(e) => setJournal(e.target.value)}
                  />
                  <label className="pl-2" for="public">
                    Public
                  </label>
                </div>
              </div>
              <div className="d-flex flex-column">
                <div className="d-flex">
                  <p className="secondary-title">Default Measure</p>
                  <HelpIcon className="help-3 mr-5" />
                  <div className="primary-input div-4">
                    <p className="help-text pl-2">
                      All Items on your shopping list and recipes will convert to your measurement
                      choice.
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <input
                    className="mt-1"
                    type="radio"
                    name="measures"
                    value="metric"
                    onChange={(e) => setMeasures(e.target.value)}
                  />
                  <label className="pl-2" for="metric">
                    Metric
                  </label>
                </div>
                <div>
                  <input
                    className="mt-1"
                    type="radio"
                    name="measures"
                    value="us"
                    onChange={(e) => setMeasures(e.target.value)}
                  />
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
                <input
                  className="primary-input"
                  type="text"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
              <div className="d-flex flex-column mt-2">
                <label for="us">Weight (Kg)</label>
                <input
                  placeholder="100"
                  className="primary-input"
                  type="text"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
              <div className="d-flex flex-column mt-2">
                <label for="us">Health Goals</label>
                <input
                  placeholder="Active"
                  className="primary-input"
                  type="text"
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                />
              </div>
            </div>
            <div className="d-flex flex-column align-items-start">
              <div className="d-flex">
                <p className="secondary-title">Meal Times</p>
                <HelpIcon className="help-3 ml-2" />
                <div className="primary-input div-5">
                  <p className="help-text pl-2">
                    Set the times when you eat breakfast, lunch, dinner. These times will be used
                    when syncing your meal plan to your iCal/Google Calendar.
                  </p>
                </div>
              </div>
              <div className="d-flex flex-column">
                <label for="us">Breakfast At</label>
                <input
                  placeholder="07:00"
                  className="primary-input"
                  type="text"
                  value={breakfast}
                  onChange={(e) => setBreakfast(e.target.value)}
                />
              </div>
              <div className="d-flex flex-column mt-2">
                <label for="us">Lunch At</label>
                <input
                  placeholder="13:00"
                  className="primary-input"
                  type="text"
                  value={lunch}
                  onChange={(e) => setLunch(e.target.value)}
                />
              </div>
              <div className="d-flex flex-column mt-2">
                <label for="us">Dinner At</label>
                <input
                  placeholder="19:00"
                  className="primary-input"
                  type="text"
                  value={dinner}
                  onChange={(e) => setDinner(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="pt-5 d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column">
              <p className="secondary-title">TimeZone</p>
              <input
                placeholder="19:00"
                className="primary-input"
                type="text"
                value={zone}
                onChange={(e) => setZone(e.target.value)}
              />
            </div>
            <button
              onClick={() => {
                console.log(height, weight, lunch, zone, dinner, privacy, measures);
              }}
              className="primary-button"
            >
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
