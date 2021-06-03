import React, { useState } from 'react';
import SearchHeader from '../common/SearchHeader';
import CounterComponent from '../common/CounterComponent';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Separator from '../Layout/Separator';

const ShoppingComponent = ({ category, name }) => {
  const [quantity, setQuantity] = useState(0);
  const [checked, setChecked] = useState(false);

  const handleCheckbox = (e) => {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between px-5">
        <p>{category}</p>
        <div className="d-flex">
          <CheckBoxIcon
            onClick={handleCheckbox}
            className="shopping-check-box mr-3"
            style={{ opacity: checked ? 1 : 0.4 }}
          />
          <div className="d-flex flex-column ml-3">
            <CounterComponent
              number={quantity}
              onClickInc={() => setQuantity(quantity + 1)}
              onClickDec={() => {
                setQuantity(quantity - 1);
              }}
            />
            <p onClick={() => setQuantity(0)} className="normal-label mt-1 ml-3 text-center remove">
              Remove
            </p>
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
          <input disabled className="primary-input w-25" placeholder="Add Items to Shopping List" />
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
            <ShoppingComponent category="Bread And Bakery" />
            <ShoppingComponent category="Sea Food" />
            <ShoppingComponent category="Dairy" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingList;
