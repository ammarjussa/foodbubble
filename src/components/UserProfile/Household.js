import React, { useState } from 'react';
import UserProfileHeader from '../common/UserProfileHeader';
import { useHistory } from 'react-router-dom';

const Household = () => {
  const history = useHistory();

  const SaveAction = (e) => {
    e.preventDefault();
    history.push('/experience');
  };

  return (
    <>
      <UserProfileHeader />
      <div className="d-flex flex-column align-items-center profile-options">
        <p className="secondary-title">Household</p>
        <div className="options-table">
          <div className="options-layout"></div>
          <button className="secondary-button align-self-center" onClick={SaveAction}>
            Save To Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default Household;
