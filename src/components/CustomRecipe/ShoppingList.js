import React from 'react';
import SearchHeader from '../common/SearchHeader';

const ShoppingComponent = ({ category, name }) => {};

const ShoppingList = () => {
  return (
    <>
      <SearchHeader title="Shopping List" />
      <div className="shopping p-5">
        <div className="d-flex align-items-start">
          <p className="mt-1">Shopping List</p>
          <input className="primary-input w-25" placeholder="Add Items to Shopping List" />
        </div>
        <p className="mt-5">Items in Shopping List</p>
        <div className="mt-5 pt-3">
          <p>Create New list</p>
          <div>
            <p className="text-right mb-5">Quantity</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingList;
