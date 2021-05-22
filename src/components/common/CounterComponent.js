import React, { useState } from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter d-flex">
      <input className="primary-input" value={count} />
      <div className="d-flex flex-column justify-content-between align-items-center button-container">
        <ExpandLessIcon className="counter-icon" onClick={() => setCount(count + 1)} />
        <ExpandMoreIcon className="counter-icon" onClick={() => setCount(count - 1)} />
      </div>
    </div>
  );
};

export default CounterComponent;
