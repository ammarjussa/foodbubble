import React, { useState } from 'react';
import UserProfileHeader from '../common/UserProfileHeader';
import CheckOptions from '../common/CheckOptions';
import { useHistory } from 'react-router-dom';

const UserAvoidance = () => {
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
        <p className="secondary-title">Avoidances</p>
        <div className="options-table">
          <div className="options-layout">
            <CheckOptions name="None" handleChange={handleOptionChange} />
            <CheckOptions name="Alcohol" handleChange={handleOptionChange} />
            <CheckOptions name="Caffeine" handleChange={handleOptionChange} />
            <CheckOptions name="Celery" handleChange={handleOptionChange} />
            <CheckOptions name="Corn" handleChange={handleOptionChange} />
            <CheckOptions name="Crustacean" handleChange={handleOptionChange} />
            <CheckOptions name="Diary" handleChange={handleOptionChange} />
            <CheckOptions name="Egg" handleChange={handleOptionChange} />
            <CheckOptions name="Fish" handleChange={handleOptionChange} />
            <CheckOptions name="Gluten" handleChange={handleOptionChange} />
            <CheckOptions name="Grains" handleChange={handleOptionChange} />
            <CheckOptions name="Ground Nut" handleChange={handleOptionChange} />
            <CheckOptions name="Lactose" handleChange={handleOptionChange} />
            <CheckOptions name="Milk" handleChange={handleOptionChange} />
            <CheckOptions name="Mollusc" handleChange={handleOptionChange} />
            <CheckOptions name="Mustard" handleChange={handleOptionChange} />
            <CheckOptions name="Peanut" handleChange={handleOptionChange} />
            <CheckOptions name="Seafood" handleChange={handleOptionChange} />
            <CheckOptions name="Sesame" handleChange={handleOptionChange} />
            <CheckOptions name="Shellfish" handleChange={handleOptionChange} />
            <CheckOptions name="Soy" handleChange={handleOptionChange} />
            <CheckOptions name="Sulphites" handleChange={handleOptionChange} />
            <CheckOptions name="Tree Nut" handleChange={handleOptionChange} />
            <CheckOptions name="Wheat" handleChange={handleOptionChange} />
            <CheckOptions name="Yeast" handleChange={handleOptionChange} />
          </div>
          <button className="secondary-button align-self-center" onClick={SaveAction}>
            Save To Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default UserAvoidance;
