import React, { useState } from 'react';
import UserProfileHeader from '../common/UserProfileHeader';
import CheckOptions from '../common/CheckOptions';
import { useHistory } from 'react-router-dom';

const DietaryRequirements = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const history = useHistory();

  const handleOptionChange = (e) => {
    if (e.target.checked) {
      setSelectedOptions([...selectedOptions, e.target.value]);
    } else {
      setSelectedOptions(selectedOptions.filter((item) => item !== e.target.value));
    }
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
        <p className="secondary-title">Dietary Requirements</p>
        <div className="options-table">
          <div className="options-layout">
            <CheckOptions name="No Dietary Requirements" handleChange={handleOptionChange} />
            <CheckOptions name="Vegetarian" handleChange={handleOptionChange} />
            <CheckOptions name="Vegan" handleChange={handleOptionChange} />
            <CheckOptions name="Pescetarian" handleChange={handleOptionChange} />
            <CheckOptions name="Lactose Free" handleChange={handleOptionChange} />
            <CheckOptions name="Ovo Vegetarian" handleChange={handleOptionChange} />
            <CheckOptions name="Paleo" handleChange={handleOptionChange} />
            <CheckOptions name="Primal" handleChange={handleOptionChange} />
            <CheckOptions name="Ketogenic" handleChange={handleOptionChange} />
            <CheckOptions name="Whole 30" handleChange={handleOptionChange} />
            <CheckOptions name="Lacto Vegetarian" handleChange={handleOptionChange} />
            <CheckOptions name="Ovo-Lacto-Vegetarian" handleChange={handleOptionChange} />
            <CheckOptions name="Low-Carb" handleChange={handleOptionChange} />
            <CheckOptions name="Detox" handleChange={handleOptionChange} />
            <CheckOptions name="Mediterranean" handleChange={handleOptionChange} />
            <CheckOptions name="Dairy Free" handleChange={handleOptionChange} />
            <CheckOptions name="Gluten Free" handleChange={handleOptionChange} />
          </div>
          <button className="secondary-button align-self-center" onClick={SaveAction}>
            Save To Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default DietaryRequirements;
