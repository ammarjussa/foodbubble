import React from 'react';

const VoiceSearch = () => {
  return (
    <div>
      <div>
        <p className="main-title text-center">My Food Bubble Voice Search</p>
        <p className="secondary-title text-center">
          My Food Bubble helps you to manage your food from meal plan to shopping list to cooking
        </p>
      </div>

      <div className="alexa">
        <img
          className="voice-image align-self-center"
          alt="food demo"
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
        />

        <button className="secondary-button">Buy Amazon Alexa</button>
      </div>

      <div className="wine">
        <p className="main-title text-center mb-5">Wine Pairing</p>
        <div className="row">
          <p className="col-md-4 d-flex flex-column">
            Find recipes using what you have in your fridge. <br /> Find recipes that use as many of
            the ingredients you have available as possible while limiting missing ingredients.{' '}
            <br />
            Find recipes using what you have in your fridge. <br /> Find recipes that use as many of
            the ingredients you have available as possible while limiting missing ingredients
            <br />
            <br />
            <button className="primary-button align-self-center">Try it Now</button>
          </p>
          <img
            className="col-md-4"
            alt="food demo"
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
          />
          <img
            className="col-md-4"
            alt="food demo"
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
          />
        </div>
      </div>

      <div className="work">
        <p className="main-title text-center mb-5">How it works</p>
        <div className="row">
          <div className="col-md-4 work-img-container">
            <img
              className="work-img"
              alt="food demo"
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
            />
            <p className="work-text">
              Ask my Food Bubble questions about food, recipes, nutrition, food jokes and other food
              related questions
            </p>
          </div>
          <div className="col-md-4 work-img-container">
            <img
              className="work-img"
              alt="food demo"
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
            />
            <p className="work-text">
              Ask my Food Bubble questions about food, recipes, nutrition, food jokes and other food
              related questions
            </p>
          </div>
          <div className="col-md-4 work-img-container">
            <img
              className="work-img"
              alt="food demo"
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
            />
            <p className="work-text">
              Ask my Food Bubble questions about food, recipes, nutrition, food jokes and other food
              related questions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceSearch;
