import React from 'react';
import SearchHeader from '../common/SearchHeader';

const AddCustomRecipe = () => {
  return (
    <div>
      <SearchHeader title="Add A Custom Recipe" />
      <div className="custom-recipe p-5 mx-5 d-flex flex-column">
        <p className="secondary-title">Add Your Own Original Recipe</p>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column">
            <div className="d-flex flex-column align-items-start">
              <label for="title">Name</label>
              <input
                className="primary-input mb-4"
                style={{ width: '25vw' }}
                placeholder="Name of Recipe"
                type="text"
              />
            </div>
            <div className="d-flex flex-column align-items-start">
              <label for="description">Ingredients</label>
              <textarea className="cr-textarea"></textarea>
            </div>
          </div>
          <div>
            <div className="d-flex flex-column align-items-start">
              <label for="description">Description</label>
              <input
                className="primary-input mb-4"
                style={{ width: '25vw' }}
                placeholder="Description of Recipe"
                type="text"
              />
            </div>
          </div>
        </div>
        <button
          className="primary-button align-self-start"
          style={{ width: '20vw', marginTop: '4%' }}
        >
          Show preview of ingredients
        </button>
        <button
          className="primary-button align-self-start"
          style={{ width: '23vw', marginTop: '4%' }}
        >
          Add Ingredients to the shopping list
        </button>

        <div className="d-flex justify-content-between mt-5 pt-5">
          <div className="d-flex flex-column align-items-start">
            <label for="description">Cooking Instructions</label>
            <textarea className="cr-textarea2"></textarea>
          </div>
          <div className="d-flex flex-column align-items-start">
            <label for="description">Your Rating</label>
            <div className="dropdown">
              <select name="cars" id="cars">
                <option value="0">0-No Information</option>
                <option value="1">1-Star - Disguisting</option>
                <option value="2">2-Stars - OK, would not make again</option>
                <option value="3">3-Stars - Tasty, could be improved</option>
                <option value="4">4-Stars - Feed me this everyday</option>
              </select>
            </div>
          </div>
        </div>
        <div className="pt-5 mt-5">
          <div className=" d-flex justify-content-between">
            <input
              className="primary-input mb-4"
              style={{ width: '15vw' }}
              placeholder="Servings QTY"
              type="text"
            />
            <input
              className="primary-input mb-4"
              style={{ width: '15vw' }}
              placeholder="Ready in (Mins)"
              type="text"
            />
            <input
              className="primary-input mb-4"
              style={{ width: '15vw' }}
              placeholder="Preparation Time (Mins)"
              type="text"
            />
            <input
              className="primary-input mb-4"
              style={{ width: '15vw' }}
              placeholder="Cooking Time (Mins)"
              type="text"
            />
          </div>

          <div>
            <div className="d-flex align-items-start">
              <input
                className="primary-input mb-4"
                style={{ width: '15vw' }}
                placeholder="Custom Tags"
                type="text"
              />
              <button
                className="primary-button align-self-start"
                style={{ width: '4vw', padding: '5px', marginLeft: '10%' }}
              >
                Add
              </button>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-start">
              <input
                className="primary-input mb-4"
                style={{ width: '23vw' }}
                placeholder="Upload Images (Max 3MB jpg)"
                type="text"
                disabled
              />
              <button
                className="primary-button align-self-start"
                style={{ width: '8vw', padding: '5px', marginLeft: '9%' }}
              >
                Upload
              </button>
            </div>
            <div className="d-flex flex-column align-items-center px-5">
              <button
                className="primary-button"
                style={{ width: '10vw', padding: '5px', alignSelf: 'center' }}
              >
                Save To Recipes
              </button>
              <p className="instructions">Adds recipe to My custom recipes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCustomRecipe;
