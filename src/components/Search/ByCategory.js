import React from 'react';
import SearchHeader from './SearchHeader';
import FoodComponent from './FoodComponent';
import FeaturedRecipes from './FeaturedRecipes';

const ByCategory = () => {
  return (
    <div>
      <SearchHeader type="category" />
      <div className="search-category pt-5 mt-4">
        <div className="d-flex justify-content-around">
          <FoodComponent name="Carbs" />
          <FoodComponent name="Meat" />
          <FoodComponent name="Sea Food" />
          <FoodComponent name="Diary" />
        </div>
        <div className="d-flex justify-content-around">
          <FoodComponent name="30-min" />
          <FoodComponent name="Workout" />
          <FoodComponent name="Vegan" />
          <FoodComponent name="Vegetarian" />
        </div>
        <div className="d-flex justify-content-around">
          <FoodComponent name="Brunch" />
          <FoodComponent name="Salads" />
          <FoodComponent name="Drinks" />
          <FoodComponent name="Keto" />
        </div>
      </div>
      <FeaturedRecipes />
    </div>
  );
};

export default ByCategory;
