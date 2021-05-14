import React from 'react';
import Separator from '../Layout/Separator';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Home = function () {
  return (
    <div className="home-component">
      <img
        className="home-image"
        alt="food demo"
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
      />
      <p className="home-title">Create Your Meal</p>
      <div className="d-flex align-items-center justify-content-center ml-5">
        <input placeholder="Add your ingredients" />
        <button>Add Ingredient</button>
      </div>
      <div className="d-flex align-items-center justify-content-around m-5 pl-5 pr-5  ">
        <p>Ingredients</p>
        <p>Receipes</p>
        <p>Meal Planner</p>
      </div>

      <Separator />

      <div>
        <p className="home-title">Features and Benefits</p>
        <p className="pl-5 pr-5 ml-5 mr-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book.
        </p>
        <div className="d-flex justify-content-around align-items-center mt-5 pt-5 mb-5 pb-5">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <FavoriteIcon className="home-icon" />
            <p className="home-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <SearchIcon className="home-icon" />
            <p className="home-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <AccessibilityIcon className="home-icon" />
            <p className="home-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <p className="home-title">Featured Recipes</p>
        <div className="d-flex justify-content-around align-items-center mt-5">
          <div>
            <img
              className="home-image-small"
              alt="food demo"
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
            />
            <p className="home-text">
              {' '}
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <button className="home-recipe-button">View Recipe</button>
          </div>
          <div>
            <img
              className="home-image-small"
              alt="food demo"
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
            />
            <p className="home-text">
              {' '}
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <button className="home-recipe-button">View Recipes</button>
          </div>
          <div>
            <img
              className="home-image-small"
              alt="food demo"
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
            />
            <p className="home-text">
              {' '}
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <button className="home-recipe-button">View Recipes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
