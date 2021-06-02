import React, { useState } from 'react';
import UserProfileHeader from '../common/UserProfileHeader';
import CheckOptions from '../common/CheckOptions';
import { useHistory } from 'react-router-dom';

const FavoriteCuisine = () => {
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
        <p className="secondary-title">Favorite Cuisines</p>
        <div className="options-table">
          <div className="options-layout">
            <CheckOptions name="African" handleChange={handleOptionChange} />
            <CheckOptions name="American" handleChange={handleOptionChange} />
            <CheckOptions name="Asian" handleChange={handleOptionChange} />
            <CheckOptions name="Australian" handleChange={handleOptionChange} />
            <CheckOptions name="British" handleChange={handleOptionChange} />
            <CheckOptions name="Cajun And Creole" handleChange={handleOptionChange} />
            <CheckOptions name="Canadian" handleChange={handleOptionChange} />
            <CheckOptions name="Caribbean" handleChange={handleOptionChange} />
            <CheckOptions name="Chinese" handleChange={handleOptionChange} />
            <CheckOptions name="Cuban" handleChange={handleOptionChange} />
            <CheckOptions name="Eastern Europe" handleChange={handleOptionChange} />
            <CheckOptions name="European" handleChange={handleOptionChange} />
            <CheckOptions name="French" handleChange={handleOptionChange} />
            <CheckOptions name="German" handleChange={handleOptionChange} />
            <CheckOptions name="Greek" handleChange={handleOptionChange} />
            <CheckOptions name="Indian" handleChange={handleOptionChange} />
            <CheckOptions name="Israeli" handleChange={handleOptionChange} />
            <CheckOptions name="Italian" handleChange={handleOptionChange} />
            <CheckOptions name="Japanese" handleChange={handleOptionChange} />
            <CheckOptions name="Korean" handleChange={handleOptionChange} />
            <CheckOptions name="Latin American" handleChange={handleOptionChange} />
            <CheckOptions name="Mediterranean" handleChange={handleOptionChange} />
            <CheckOptions name="Mexican" handleChange={handleOptionChange} />
            <CheckOptions name="Middle Eastern" handleChange={handleOptionChange} />
            <CheckOptions name="Moroccan" handleChange={handleOptionChange} />
            <CheckOptions name="Portuguese" handleChange={handleOptionChange} />
            <CheckOptions name="Southern" handleChange={handleOptionChange} />
            <CheckOptions name="TexMex" handleChange={handleOptionChange} />
            <CheckOptions name="Thai" handleChange={handleOptionChange} />
            <CheckOptions name="Vietnamese" handleChange={handleOptionChange} />
            <CheckOptions name="World Cuisine" handleChange={handleOptionChange} />
          </div>
          <button className="secondary-button align-self-center" onClick={SaveAction}>
            Save To Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default FavoriteCuisine;
