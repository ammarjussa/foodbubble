import React from 'react';
import SearchHeader from '../common/SearchHeader';
import FoodComponent from './FoodComponent';
import FeaturedRecipes from './FeaturedRecipes';

const ByMeal = () => {
  return (
    <div>
      <SearchHeader title="Search By Meal" placeholder="Search Meal" search />
      <div className="search-meal pt-5 mt-4">
        <div className="d-flex justify-content-around">
          <FoodComponent name="Breakfast" />
          <FoodComponent name="Lunch" />
          <FoodComponent name="Dinner" />
        </div>
        <div className="d-flex justify-content-around">
          <FoodComponent name="Snack" />
          <FoodComponent name="Dessert" />
          <FoodComponent name="Workout" />
        </div>
        <p>Special Occasions</p>
        <div className="d-flex justify-content-around">
          <FoodComponent name="Anniversary" />
          <FoodComponent name="Christmas" />
          <FoodComponent name="Birthdays" />
        </div>
      </div>
      <FeaturedRecipes />
    </div>
  );
};

export default ByMeal;
