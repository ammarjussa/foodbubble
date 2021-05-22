import React from 'react';

const BoxComponent = ({ title = 'All', number = 10 }) => {
  return (
    <div className="box d-flex flex-column align-items-center">
      <img
        className="box-img"
        alt="box"
        src="https://i5.walmartimages.com/asr/83e8eef0-1214-4c4d-ab9c-a4b4dbdb9164_1.85300cb2d9ca97099e733d2e7ff58c80.jpeg"
      />
      <p className="secondary-title pt-3">{title}</p>
      <p>{number}</p>
    </div>
  );
};

export default BoxComponent;
