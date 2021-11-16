import React, { useState } from 'react';
import SearchHeader from '../common/SearchHeader';
import { useHistory } from 'react-router-dom';

const AddCustomRecipe = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [instruction, setInstruction] = useState('');
  const [rating, setRating] = useState('');
  const history = useHistory();

  const [quantity, setQuantity] = useState('');
  const [time, setTime] = useState({
    ready: '',
    preparation: '',
    cooking: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(description);
    console.log(instruction);
    console.log(rating);
    console.log(time);
  };

  return (
    <div>
      <SearchHeader title="Add A Custom Recipe" />
      <div className="custom-recipe d-flex flex-column">
        <p className="secondary-title">Add Your Own Original Recipe</p>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column">
            <div className="d-flex flex-column align-items-start">
              <label for="title">Title</label>
              <input
                className="primary-input mb-4"
                style={{ width: '25vw' }}
                placeholder="Name of Recipe"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="d-flex flex-column align-items-start">
              <label for="ingredients">Ingredients</label>
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button
          className="primary-button align-self-start"
          style={{ width: '300px', marginTop: '4%' }}
        >
          Show preview of ingredients
        </button>
        <button
          className="primary-button align-self-start"
          style={{ width: '390px', marginTop: '4%' }}
          onClick={() => history.push('/shopping')}
        >
          Add Ingredients to the shopping list
        </button>

        <div className="d-flex justify-content-between mt-5 pt-5">
          <div className="d-flex flex-column align-items-start">
            <label for="instruction">Cooking Instructions</label>
            <textarea
              className="cr-textarea2"
              onChange={(e) => setInstruction(e.target.value)}
              value={instruction}
            ></textarea>
          </div>
          <div className="d-flex flex-column align-items-start">
            <div className="select-dropdown ml-5">
              <label for="description">Your Rating</label>
              <select name="ratings" id="ratings" onChange={(e) => setRating(e.target.value)}>
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
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <input
              className="primary-input mb-4"
              style={{ width: '15vw' }}
              placeholder="Ready in (Mins)"
              type="text"
              value={time.ready}
              onChange={(e) => setTime({ ...time, ready: e.target.value })}
            />
            <input
              className="primary-input mb-4"
              style={{ width: '15vw' }}
              placeholder="Preparation Time (Mins)"
              type="text"
              value={time.preparation}
              onChange={(e) => setTime({ ...time, preparation: e.target.value })}
            />
            <input
              className="primary-input mb-4"
              style={{ width: '15vw' }}
              placeholder="Cooking Time (Mins)"
              type="text"
              value={time.cooking}
              onChange={(e) => setTime({ ...time, cooking: e.target.value })}
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
                style={{ width: '70px', padding: '5px', marginLeft: '10%' }}
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
              />
              <button
                className="primary-button align-self-start"
                style={{ width: '120px', padding: '5px', marginLeft: '9%' }}
              >
                Upload
              </button>
            </div>
            <div className="d-flex flex-column align-items-center px-5">
              <button
                className="primary-button"
                style={{ width: '160px', padding: '5px', alignSelf: 'center' }}
                onClick={onSubmit}
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
