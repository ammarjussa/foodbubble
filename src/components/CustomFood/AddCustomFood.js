import React from 'react';
import SearchHeader from '../common/SearchHeader';

const MicroNutrition = () => (
  <div className="d-flex justify-content-between">
    <div className="d-flex flex-column align-items-center">
      <input style={{ width: '5vw' }} className="cr-input" placeholder="0" />
      <label>Protein (g)</label>
    </div>
    <div className="d-flex flex-column align-items-center">
      <input style={{ width: '5vw' }} className="cr-input" placeholder="0" />
      <label>Protein (g)</label>
    </div>
    <div className="d-flex flex-column align-items-center">
      <input style={{ width: '5vw' }} className="cr-input" placeholder="0" />
      <label>Protein (g)</label>
    </div>
    <div className="d-flex flex-column align-items-center">
      <input style={{ width: '5vw' }} className="cr-input" placeholder="0" />
      <label>Protein (g)</label>
    </div>
    <div className="d-flex flex-column align-items-center">
      <input style={{ width: '5vw' }} className="cr-input" placeholder="0" />
      <label>Protein (g)</label>
    </div>
    <div className="d-flex flex-column align-items-center">
      <input style={{ width: '5vw' }} className="cr-input" placeholder="0" />
      <label>Protein (g)</label>
    </div>
    <div className="d-flex flex-column align-items-center">
      <input style={{ width: '5vw' }} className="cr-input" placeholder="0" />
      <label>Protein (g)</label>
    </div>
  </div>
);

const AddCustomFood = () => {
  return (
    <div>
      <SearchHeader title="Add Custom Food" />
      <div className="custom-recipe p-5 mx-5">
        <div className="d-flex justify-content-between">
          <div>
            <div>
              <p className="global-text1">Name of Food</p>
              <input
                className="cr-input"
                style={{ width: '15vw' }}
                placeholder="Name of the Food"
              />
            </div>
            <div>
              <p className="global-text1">Price Per Serving</p>
              <input className="cr-input" style={{ width: '10vw' }} placeholder="$" />
            </div>
            <div className="pb-5 mb-5">
              <p className="global-text1">Choose Custom Food Box</p>
              <select name="food-box" id="food-box">
                <option value="favorite">Favorite</option>
                <option value="italian">Italian</option>
                <option value="french">French</option>
                <option value="chinese">Chinese</option>
              </select>
            </div>
            <div>
              <p className="global-text1">Macro Nutrition Per Serving</p>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column align-items-center">
                  <input style={{ width: '5vw' }} className="cr-input" placeholder="0" />
                  <label>Calories</label>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <input style={{ width: '5vw' }} className="cr-input" placeholder="0" />
                  <label>Protein (g)</label>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <input style={{ width: '5vw' }} className="cr-input" placeholder="0" />
                  <label>Fat (g)</label>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <input style={{ width: '5vw' }} className="cr-input" placeholder="0" />
                  <label>Carbs (g)</label>
                </div>
              </div>
            </div>
            <p className="micro-nutrition">Add Micro Nutrition</p>
          </div>

          <div>
            <div className="d-flex align-items-center justify-content-center">
              <div className="pr-5">
                <p className="global-text1">Dietary</p>
                <div>
                  <input type="checkbox" id="veg" name="veg" value="veg" />
                  &nbsp;
                  <label for="veg">Vegetarian</label>
                </div>
                <div>
                  <input type="checkbox" id="veg" name="veg" value="veg" />
                  &nbsp;
                  <label for="veg">Vegetarian</label>
                </div>
                <div>
                  <input type="checkbox" id="veg" name="veg" value="veg" />
                  &nbsp;
                  <label for="veg">Vegetarian</label>
                </div>
                <div>
                  <input type="checkbox" id="veg" name="veg" value="veg" />
                  &nbsp;
                  <label for="veg">Vegetarian</label>
                </div>
                <div>
                  <input type="checkbox" id="veg" name="veg" value="veg" />
                  &nbsp;
                  <label for="veg">Vegetarian</label>
                </div>
                <div>
                  <input type="checkbox" id="veg" name="veg" value="veg" />
                  &nbsp;
                  <label for="veg">Vegetarian</label>
                </div>
                <div>
                  <input type="checkbox" id="veg" name="veg" value="veg" />
                  &nbsp;
                  <label for="veg">Vegetarian</label>
                </div>
                <div>
                  <input type="checkbox" id="veg" name="veg" value="veg" />
                  &nbsp;
                  <label for="veg">Vegetarian</label>
                </div>
                <div>
                  <input type="checkbox" id="veg" name="veg" value="veg" />
                  &nbsp;
                  <label for="veg">Vegetarian</label>
                </div>
              </div>
              <div className="pl-5 ml-5">
                <p className="global-text1">Intolerances</p>
                <div>
                  <input type="checkbox" id="veg" name="veg" value="veg" />
                  &nbsp;
                  <label for="veg">Vegetarian</label>
                </div>
                <div>
                  <input type="checkbox" id="veg" name="veg" value="veg" />
                  &nbsp;
                  <label for="veg">Vegetarian</label>
                </div>
                <div>
                  <input type="checkbox" id="veg" name="veg" value="veg" />
                  &nbsp;
                  <label for="veg">Vegetarian</label>
                </div>
                <div>
                  <input type="checkbox" id="veg" name="veg" value="veg" />
                  &nbsp;
                  <label for="veg">Vegetarian</label>
                </div>
                <div>
                  <input type="checkbox" id="veg" name="veg" value="veg" />
                  &nbsp;
                  <label for="veg">Vegetarian</label>
                </div>
                <div>
                  <input type="checkbox" id="veg" name="veg" value="veg" />
                  &nbsp;
                  <label for="veg">Vegetarian</label>
                </div>
                <div>
                  <input type="checkbox" id="veg" name="veg" value="veg" />
                  &nbsp;
                  <label for="veg">Vegetarian</label>
                </div>
                <div>
                  <input type="checkbox" id="veg" name="veg" value="veg" />
                  &nbsp;
                  <label for="veg">Vegetarian</label>
                </div>
                <div>
                  <input type="checkbox" id="veg" name="veg" value="veg" />
                  &nbsp;
                  <label for="veg">Vegetarian</label>
                </div>
              </div>
            </div>

            <div className="p-4">
              <p className="global-text1">Upload Image</p>
              <div className="d-flex">
                <div className="d-flex flex-column">
                  <input style={{ width: '10vw' }} className="cr-input" placeholder="Choose File" />
                  <label className="text-center">(Max 3MB-JPEG)</label>
                </div>
                <button className="p-1 ml-5">Upload Image</button>
              </div>
            </div>
            <button className="p-1" style={{ marginLeft: '53%' }}>
              Save Custom Food
            </button>
          </div>
        </div>
        <div>
          <p className="global-text1">Micro Nutrition</p>
          <MicroNutrition />
          <br />
          <MicroNutrition />
          <br />
          <MicroNutrition />
          <br />
          <MicroNutrition />
          <br />
          <MicroNutrition />
          <br />
          <MicroNutrition />
        </div>
        <button className="p-1 mt-5" style={{marginLeft: '88%'}}>Save Custom Food</button>
      </div>
    </div>
  );
};

export default AddCustomFood;
