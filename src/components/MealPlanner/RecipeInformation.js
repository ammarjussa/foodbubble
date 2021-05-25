import React from 'react';
import SearchHeader from '../common/SearchHeader';
import Find from '../common/Find';

const Recipe = ({ title, description, img }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <img className="mp-image" alt="food demo" src={img} />
      <p className="mp-recipe-title">{title}</p>
      <p className="mp-recipe-text">{description}</p>
    </div>
  );
};

const RecipeInformation = () => {
  return (
    <>
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
        <div className="mp-recipe">
          <Recipe
            title="Meatless Monday Dinner"
            description="Sweet potato chickpea chilli with garlic toast"
            img="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
          />
          <Recipe
            title="Pasta Night"
            description="Spagetti with cherry tomatos and beef"
            img="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
          />
          <Recipe
            title="Fish Dinner"
            description="Salmon steak with gnocchi and kale"
            img="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
          />
          <Recipe
            title="Taco Thursday"
            description="Ground beef hard shell tacos with crisp lettuce"
            img="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
          />
        </div>
        <p className="text text-center">
          Customized meal plans or build your own interactive meal planning tool
        </p>

        <Find />
      </div>
    </>
  );
};

export default RecipeInformation;
