import React, { useState } from 'react';
import UserProfileHeader from '../common/UserProfileHeader';
import CheckOptions from '../common/CheckOptions';
import { useHistory } from 'react-router-dom';

const UserNutrition = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const history = useHistory();

  const handleOptionChange = (e) => {
    setSelectedOptions([...selectedOptions, e.target.value]);
  };

  const SaveAction = (e) => {
    e.preventDefault();
    if (selectedOptions.length > 0) {
      console.log(selectedOptions);
      history.push('/profile');
    } else {
      alert('Please select an option');
    }
  };
  return (
    <>
      <UserProfileHeader />
      <div className="d-flex flex-column align-items-center profile-options">
        <p className="secondary-title">Nutrition</p>
        <div className="options-table">
          <div className="options-layout">
            <CheckOptions name="None" handleChange={handleOptionChange} />
            <CheckOptions name="Healthy" handleChange={handleOptionChange} />
            <CheckOptions name="High Protein" handleChange={handleOptionChange} />
            <CheckOptions name="Low Sugar" handleChange={handleOptionChange} />
            <CheckOptions name="Low Energy" handleChange={handleOptionChange} />
            <CheckOptions name="Low Sodium" handleChange={handleOptionChange} />
            <CheckOptions name="Low Fat" handleChange={handleOptionChange} />
            <CheckOptions name="High Fibre" handleChange={handleOptionChange} />
          </div>
          <button className="secondary-button align-self-center" onClick={SaveAction}>
            Save To Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default UserNutrition;
