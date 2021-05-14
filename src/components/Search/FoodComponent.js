import React from 'react';
import { Link } from 'react-router-dom';

const FoodComponent = ({ name }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <img
        alt="food demo"
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
      />
      <Link to="/" className="search-name">
        {name}
      </Link>
    </div>
  );
};

export default FoodComponent;
