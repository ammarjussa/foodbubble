import React, { useState } from 'react';
import UserProfileHeader from '../common/UserProfileHeader';
import RadioOptions from '../common/RadioOptions';
import { useHistory } from 'react-router-dom';

const CookingExperience = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const history = useHistory();

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const SaveAction = (e) => {
    e.preventDefault();
    if (selectedOption.length > 0) {
      console.log(selectedOption);
      history.push('/profile');
    } else {
      alert('Please select an option');
    }
  };

  return (
    <>
      <UserProfileHeader />
      <div className="d-flex flex-column align-items-center profile-options">
        <p className="secondary-title">Shop Preferences</p>
        <div className="options-table">
          <div className="options-layout">
            <RadioOptions name="Beginner" handleChange={handleOptionChange} />
            <RadioOptions name="Intermediate" handleChange={handleOptionChange} />
            <RadioOptions name="Advanced" handleChange={handleOptionChange} />
          </div>
          <button className="secondary-button align-self-center" onClick={SaveAction}>
            Save To Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default CookingExperience;
