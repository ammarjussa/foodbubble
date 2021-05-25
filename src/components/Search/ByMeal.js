import React from 'react';
import SearchHeader from '../common/SearchHeader';
import FoodComponent from './FoodComponent';
import FeaturedRecipes from './FeaturedRecipes';

const ByMeal = () => {
  return (
    <div>
      <SearchHeader title="Search By Meal" placeholder="Search Meal" search />
      <div className="search-meal pt-5 mt-4">
        <div className="search-container">
          <FoodComponent name="Breakfast" />
          <FoodComponent name="Lunch" />
          <FoodComponent name="Dinner" />
        </div>
        <div className="search-container">
          <FoodComponent name="Snack" />
          <FoodComponent name="Dessert" />
          <FoodComponent name="Workout" />
        </div>
        <p className="main-title mt-4">Special Occasions</p>
        <div className="search-container">
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
