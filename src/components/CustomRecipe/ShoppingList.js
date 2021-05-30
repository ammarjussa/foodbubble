import React from 'react';
import SearchHeader from '../common/SearchHeader';
import CounterComponent from '../common/CounterComponent';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Separator from '../Layout/Separator';

const ShoppingComponent = ({ category, name }) => {
  return (
    <>
      <div className="d-flex justify-content-between px-5">
        <p>Bread And Bakery</p>
        <div className="d-flex">
          <CheckBoxIcon className="shopping-check-box mr-3" />
          <div className="d-flex flex-column ml-3">
            <CounterComponent />
            <p className="normal-label mt-1 ml-3 text-center">Remove</p>
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
};

const ShoppingList = () => {
  return (
    <>
      <SearchHeader title="Shopping List" />
      <div className="shopping p-5">
        <div className="d-flex align-items-start">
          <p className="mt-1">Shopping List</p>
          <input className="primary-input w-25" placeholder="Add Items to Shopping List" />
        </div>
        <div className="mt-5 d-flex justify-content-between">
          <p>Items in Shopping List</p>
          <p className="mr-5">Quantity</p>
        </div>
        <div className="row mt-5 pt-3">
          <div className="col-md-2">
            <p>Create New list</p>
          </div>
          <div className="col-md-10 mb-5 pb-5">
            <ShoppingComponent />
            <ShoppingComponent />
            <ShoppingComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingList;
