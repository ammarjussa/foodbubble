import React from 'react';
import SearchHeader from '../common/SearchHeader';
import Sidebar from './Sidebar';

const MyMealPlanner = () => {
  return (
    <div>
      <SearchHeader title=" My Meal Planner" />
      <div className="row p-5">
        <div className="col-md-2">
          <Sidebar />
        </div>
				<div>
					
				</div>
      </div>
    </div>
  );
};

export default MyMealPlanner;
