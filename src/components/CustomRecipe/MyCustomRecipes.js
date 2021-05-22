import React from 'react';
import SearchHeader from '../common/SearchHeader';
import Find from '../common/Find';
import BoxComponent from '../common/BoxComponent';
import PlusComponent from '../common/PlusComponent';

const MyCustomRecipes = () => {
  return (
    <div>
      <SearchHeader title="My Custom Recipes" />
      <div className="p-5 mr-5">
        <p className="secondary-title px-5 mx-4">My Custom Recipe Boxes</p>
        <div className="d-flex justify-content-around">
          <BoxComponent title="All" number={10} />
          <BoxComponent title="Favorites" number={10} />
          <BoxComponent title="Indian" number={10} />
          <BoxComponent title="Italian" number={10} />
          <BoxComponent title="Chinese" number={10} />
          <PlusComponent />
        </div>
      </div>
      <Find />
    </div>
  );
};

export default MyCustomRecipes;
