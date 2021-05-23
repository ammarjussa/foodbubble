import React, { useState } from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const CounterComponent = ({ number, onClickInc, onClickDec }) => {
  return (
    <div className="counter d-flex">
      <input className="primary-input" value={number} />
      <div className="d-flex flex-column justify-content-between align-items-center button-container">
        <ExpandLessIcon className="counter-icon" onClick={onClickInc} />
        <ExpandMoreIcon className="counter-icon" onClick={onClickDec} />
      </div>
    </div>
  );
};

export default CounterComponent;
