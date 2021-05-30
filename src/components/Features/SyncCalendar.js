import React from 'react';
import imgMealPlanner from '../../assets/images/img-meal-planner.png';

const SyncCalendar = () => {
  return (
    <div className="mx-5">
      <div className="d-flex justify-content-end">
        <img className="sync-image" src={imgMealPlanner} alt="calendar icon" />
      </div>
      <div className="mb-5 pb-5">
        <p className="secondary-title">Sync Meal with your calendar</p>
        <img
          className="w-100 mb-5 pb-5"
          alt="food demo"
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
        />
      </div>

      <div className="mb-5 pb-5">
        <p className="mx-4 secondary-title">Saved to Meal Planner Recipes</p>
        <div className="row">
          <div className="col-md-4 d-flex justify-content-center">
            <img
              className="sync-image-food"
              alt="food demo"
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
            />
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <img
              className="sync-image-food"
              alt="food demo"
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
            />
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <img
              className="sync-image-food"
              alt="food demo"
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyncCalendar;
