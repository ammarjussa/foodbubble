import React from 'react';
import UserProfileHeader from '../common/UserProfileHeader';

const Preferences = () => {
  return (
    <>
      <UserProfileHeader />
      <div className="d-flex flex-column align-items-center profile-options">
        <p className="options-title">Shop Perferences</p>
        <div className="options-table">
          {/* Radio/Checkboxes */}
          <button className="options-save-button">Save To Profile</button>
        </div>
      </div>
    </>
  );
};

export default Preferences;
