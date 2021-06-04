import React, { useState } from 'react';
import SearchHeader from '../common/SearchHeader';

const dietary = [
  'Vegetarian',
  'Vegan',
  'Pescetarian',
  'Lacto Vegetarian',
  'Ovo Vegetarian',
  'Pales',
  'Primal',
  'Ketogenic',
  'Whole30',
];

const intolerances = [
  'Diary',
  'Egg',
  'Gluten',
  'Grains',
  'Peanut',
  'Seafood',
  'Sesame',
  'Shellfish',
  'Soy',
  'Tree Nut',
  'Wheat',
  'Corn',
];

const macro = ['Calories', 'Protein (g)', 'Fat(g)', 'Carbs (g)'];

const micro = [
  [
    'Alcohol (g)',
    'Caffine (g)',
    'Calcium (g)',
    'Chlorine (g)',
    'Fiber (g)',
    'Fluoride (g)',
    'Copper (g)',
  ],
  [
    'Alcohol (g)',
    'Caffine (g)',
    'Calcium (g)',
    'Chlorine (g)',
    'Fiber (g)',
    'Fluoride (g)',
    'Copper (g)',
  ],
  [
    'Alcohol (g)',
    'Caffine (g)',
    'Calcium (g)',
    'Chlorine (g)',
    'Fiber (g)',
    'Fluoride (g)',
    'Copper (g)',
  ],
  [
    'Alcohol (g)',
    'Caffine (g)',
    'Calcium (g)',
    'Chlorine (g)',
    'Fiber (g)',
    'Fluoride (g)',
    'Copper (g)',
  ],
  [
    'Alcohol (g)',
    'Caffine (g)',
    'Calcium (g)',
    'Chlorine (g)',
    'Fiber (g)',
    'Fluoride (g)',
    'Copper (g)',
  ],
];

const MicroNutrition = () => (
  <div>
    {micro.map((mic) => (
      <div className="macro">
        {mic.map((m) => (
          <div className="d-flex flex-column align-items-center">
            <input className="primary-input small-input" placeholder="0" />
            <label>{m}</label>
          </div>
        ))}
      </div>
    ))}
  </div>
);

const AddCustomFood = () => {
  const [showMicro, setShowMicro] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [box, setBox] = useState('');
  const [diet, setDiet] = useState([]);
  const [intol, setIntol] = useState([]);

  return (
    <div>
      <SearchHeader title="Add Custom Food" />
      <div className="custom-recipe p-5 mx-5">
        <div className="row">
          <div className="col-md-5">
            <div>
              <p className="secondary-title">Name of Food</p>
              <input
                className="primary-input"
                style={{ width: '250px' }}
                placeholder="Name of the Food"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <p className="secondary-title">Price Per Serving</p>
              <input
                className="primary-input"
                style={{ width: '150px' }}
                placeholder="$"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="pb-5 mb-5 select-dropdown">
              <p className="secondary-title">Choose Custom Food Box</p>
              <select name="food-box" id="food-box" >
                <option value="favorite">Favorite</option>
                <option value="italian">Italian</option>
                <option value="french">French</option>
                <option value="chinese">Chinese</option>
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <p className="secondary-title">Dietary</p>
            {dietary.map((diet) => (
              <div>
                <input type="checkbox" id={diet} name="dietary" value={diet} />
                &nbsp;
                <label for="veg">{diet}</label>
              </div>
            ))}
          </div>

          <div className="col-md-3">
            <p className="secondary-title marg">Intolerances</p>
            {intolerances.map((diet) => (
              <div>
                <input type="checkbox" id={diet} name="intolerances" value={diet} />
                &nbsp;
                <label for="veg">{diet}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="d-flex align-items-center row marg">
          <div className="col-md-6">
            <p className="secondary-title">Macro Nutrition Per Serving</p>
            <div className="macro">
              {macro.map((mac) => (
                <div className="d-flex flex-column align-items-center">
                  <input className="primary-input small-input" placeholder="0" />
                  <label>{mac}</label>
                </div>
              ))}
            </div>
            <p
              className="micro-nutrition"
              onClick={() => (showMicro ? setShowMicro(false) : setShowMicro(true))}
            >
              Add Micro Nutrition
            </p>
          </div>

          <div className="col-md-2"></div>
          <div className="col-md-4 marg">
            <p className="secondary-title">Upload Image</p>
            <div className="upload-image">
              <div className="d-flex flex-column">
                <input
                  disabled
                  style={{ width: '150px' }}
                  className="cr-input"
                  placeholder="Choose File"
                />
                <label className="text-center">(Max 3MB-JPEG)</label>
              </div>
              <button className="ml-5 mb-5 primary-button" style={{ width: '120px' }}>
                Upload Image
              </button>
            </div>
            <button className="primary-button save">Save Custom Food</button>
          </div>
        </div>
        {showMicro ? (
          <div>
            <p className="secondary-title marg">Micro Nutrition</p>
            <MicroNutrition />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AddCustomFood;
