import React, { useState } from 'react';
import SearchHeader from '../common/SearchHeader';
import CounterComponent from '../common/CounterComponent';
import { Form } from 'react-bootstrap';
import { history, useHistory } from 'react-router-dom';

const Recipe = () => {
  const [servings, setServings] = useState(0);
  const history = useHistory();
  const [ingCheck, setIngCheck] = useState(false);
  const [equiCheck, setEquiCheck] = useState(false);

  return (
    <>
      <SearchHeader title="Recipe" />
      <div>
        <p className="main-title text-center">Shrimp Fried Rice</p>
        <div className="p-3">
          <img
            className="col-md-3"
            alt="food demo"
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
          />
          <div className="mt-5 col-md-8">
            <p className="secondary-title font-weight-bold d-flex align-items-center justify-content-between">
              Dish Information
              <button className="primary-button">View Cooking Method</button>
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. Lorem
              Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book
            </p>
          </div>
          <div className="col-md-9 mt-5 row">
            <div className="d-flex align-items-start col-md-5 justify-content-between">
              <p className="secondary-title">Ingredients</p>
              <div>
                <label className="normal-label">Servings</label>
                <CounterComponent
                  number={servings}
                  onClickInc={() => setServings(servings + 1)}
                  onClickDec={() => {
                    setServings(servings - 1);
                  }}
                />
              </div>
              <div className="d-flex flex-column align-items-center ">
                <Form.Check
                  className="switch-style"
                  type="switch"
                  id="ingredients"
                  onChange={(e) => setIngCheck(!e.target.checked)}
                />
                <p className="secondary-title">Grid |List </p>
              </div>
            </div>
            <div className="recipe-equipment col-md-7">
              <p className="secondary-title">Equipment</p>
              <div className="d-flex flex-column align-items-center">
                <Form.Check
                  className="switch-style"
                  type="switch"
                  id="equipment"
                  onChange={(e) => setEquiCheck(!e.target.checked)}
                />
                <p className="secondary-title">Grid |List </p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <button
              className="secondary-button"
              onClick={() => {
                history.push('/shopping');
              }}
            >
              Add Ingredients to Shopping List
            </button>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <p className="secondary-title">Nutritional Information</p>
            </div>
            <div className="col-md-6">
              <p className="main-title">Tips</p>
              <p className="secondary-title">Health Tips</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className="secondary-title">Price Tips</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className="secondary-title">Cooking Tips</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="mt-5">
            <p className="secondary-title font-weight-bold text-center">Related Recipes</p>
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
      </div>
    </>
  );
};

export default Recipe;
