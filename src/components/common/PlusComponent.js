import React from 'react';
import { Link } from 'react-router-dom';

const PlusComponent = () => {
  return (
    <div className="plus">
      <div class="dropdown">
        <button class="dropbtn">
          <p>+</p>
        </button>
        <div class="dropdown-content">
          <Link to="/addrecipe">Add Custom Recipes</Link>
          <Link to="#">Save Recipe link</Link>
          <Link to="#">Create Recipe</Link>
          <Link to="#">Add Collection</Link>
          <Link to="#">How to save recipes</Link>
        </div>
      </div>
    </div>
  );
};

export default PlusComponent;
