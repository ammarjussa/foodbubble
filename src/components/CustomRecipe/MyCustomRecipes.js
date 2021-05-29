import React from 'react';
import SearchHeader from '../common/SearchHeader';
import Find from '../common/Find';
import BoxComponent from '../common/BoxComponent';
import PlusComponent from '../common/PlusComponent';

const MyCustomRecipes = () => {
  return (
    <>
      <SearchHeader title="My Custom Recipes" />
      <div className="p-5">
        <p className="secondary-title">My Custom Recipe Boxes</p>
        <div className="my-custom-recipes">
          <BoxComponent title="All" number={10} />
          <BoxComponent title="Favorites" number={10} />
          <BoxComponent title="Indian" number={10} />
          <BoxComponent title="Italian" number={10} />
          <BoxComponent title="Chinese" number={10} />
          <PlusComponent />
        </div>
        <Find />
      </div>
    </>
  );
};

export default MyCustomRecipes;
