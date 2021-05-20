import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import imgMealPlanner from '../../assets/images/img-meal-planner.png';
import { Link } from 'react-router-dom';

const SearchHeader = ({ title, placeholder, search }) => {
  return (
    <div className="d-flex justify-content-around align-items-end profile-header">
      <div></div>
      <div>
        <p>{title}</p>
        {search ? (
          <div className="profile-search">
            <input type="text" placeholder={placeholder} />
            <SearchIcon className="search-icon" />
          </div>
        ) : null}
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
