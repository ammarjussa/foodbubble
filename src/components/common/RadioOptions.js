import React from 'react';

const RadioOptions = ({ name, handleChange }) => {
  return (
    <div className="form-check mb-3">
      <input
        className="form-check-input"
        value={name}
        type="radio"
        name="shop-preference"
        id={name}
        onChange={handleChange}
      />
      <label className="form-check-label normal-label" for={name}>
        {name}
      </label>
    </div>
  );
};

export default RadioOptions;
