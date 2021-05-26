import React, { useState } from 'react';
import UserProfileHeader from '../common/UserProfileHeader';
import { useHistory } from 'react-router-dom';
import CounterComponent from '../common/CounterComponent';

const Household = () => {
  const history = useHistory();

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const SaveAction = (e) => {
    e.preventDefault();
    if (adults < 0 || children < 0) {
      alert('Adults and Children must be zero or greater');
    }
    console.log(adults, children);
    history.push('/profile');
  };

  return (
    <>
      <UserProfileHeader />
      <div className="d-flex flex-column align-items-center profile-options">
        <p className="secondary-title">Household</p>
        <div className="options-table">
          <div className="ml-5 mr-5 mb-5 pb-5">
            <div className="d-flex align-items-start justify-content-between">
              <p className="main-title">Adults</p>
              <div>
                <CounterComponent
                  number={adults}
                  onClickInc={() => setAdults(adults + 1)}
                  onClickDec={() => {
                    setAdults(adults - 1);
                  }}
                />
                <p onClick={() => setAdults(0)} className="normal-label remove mt-1">
                  Remove
                </p>
              </div>
            </div>
            <div className="mt-5"></div>
            <div className="d-flex align-items-start justify-content-between">
              <p className="main-title">Children</p>
              <div>
                <CounterComponent
                  number={children}
                  onClickInc={() => setChildren(children + 1)}
                  onClickDec={() => {
                    setChildren(children - 1);
                  }}
                />
                <p onClick={() => setChildren(0)} className="normal-label remove mt-1">
                  Remove
                </p>
              </div>
            </div>
          </div>
          <button className="secondary-button align-self-center" onClick={SaveAction}>
            Save To Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default Household;
