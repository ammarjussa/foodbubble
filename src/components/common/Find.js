import React from 'react';

const Find = () => {
  return (
    <div className="mb-5 pb-5">
      <p className="main-title text-center mt-5">What's In My Fridge?</p>
      <div className="row mt-5">
        <div className="row find">
          <p className="col-md-6 d-flex flex-column">
            Find recipes using what you have in your fridge. <br /> Find recipes that use as many of
            the ingredients you have available as possible while limiting missing ingredients
            <br />
            <br />
            <button className="primary-button align-self-center">Try it Now</button>
          </p>
          <img
            className="col-md-3 mobile"
            alt="food demo"
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
          />
          <img
            className="col-md-3 mobile"
            alt="food demo"
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
          />
        </div>
      </div>

      <p className="main-title text-center mt-5">Wine Pairing</p>
      <div className="row mt-5">
        <div className="row find">
          <p className="col-md-6 d-flex flex-column">
            Find recipes using what you have in your fridge. <br /> Find recipes that use as many of
            the ingredients you have available as possible while limiting missing ingredients
            <br />
            <br />
            <button className="primary-button align-self-center">Try it Now</button>
          </p>
          <img
            className="col-md-3 mobile"
            alt="food demo"
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
          />
          <img
            className="col-md-3 mobile"
            alt="food demo"
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
          />
        </div>
      </div>
    </div>
  );
};

export default Find;
