import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import imgMealPlanner from '../../assets/images/img-meal-planner.png';
import { Link } from 'react-router-dom';

const SearchHeader = ({ type }) => {
  return (
    <div className="d-flex justify-content-around align-items-end profile-header">
      <div></div>
      <div>
        <p>{type === 'meal' ? 'Search By Meal' : 'Search By Category'}</p>
        <div className="profile-search">
          <input type="text" placeholder={type === 'meal' ? 'Search Meal' : 'Search Category'} />
          <SearchIcon className="search-icon" />
        </div>
      </div>
      <div className="d-flex flex-column align-items-center">
        <img className="w-50" src={imgMealPlanner} alt="calendar icon" />
        <Link className="search-link" to="/">
          View Planner
        </Link>
      </div>
    </div>
  );
};

export default SearchHeader;
