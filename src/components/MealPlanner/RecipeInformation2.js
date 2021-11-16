import React from 'react';
import SearchHeader from '../common/SearchHeader';
import { useHistory } from 'react-router-dom';

const RecipeInformation2 = () => {
  const history = useHistory();

  return (
    <div>
      <SearchHeader title="Meal Planner" />
      <div className=" meal-planner-instructions">
        <p className="secondary-title">How the Meal Planner Works</p>
        <p className="text">
          The meal planner uses an algorithm to calculate the precise number of calories each user
          should consume based on their age, height, weight, gender, health goals, and activity
          levels as present in their profile.
          <br />
          <br />
          Then, based on the user's caloric requirement and other details like dietary preferences,
          allergies and intolerance, disliked ingredients, and cooking preferences, a tailor-made
          meal plan is created.
          <br />
          <br />
          The auto-generated meal plan includes recipes taken from our extensive and varied recipe
          database that are found suitable to the requirements.
        </p>
        <br />
        <br />
        <button className="secondary-button" onClick={() => history.push('/mealplanner')}>
          Create A Meal Planner
        </button>
      </div>
    </div>
  );
};

export default RecipeInformation2;
