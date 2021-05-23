import React from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const ContinueButton = ({ onClick }) => {
  return (
    <div
      className="d-flex align-items-center justify-content-center continue-container"
      onClick={onClick}
    >
      <ArrowRightIcon className="continue-icon" />
    </div>
  );
};

export default ContinueButton;
