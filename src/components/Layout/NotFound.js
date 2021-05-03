import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center m-t-20">
      <h1 className="mr-3 pr-3 align-top border-right inline-block align-content-center">404</h1>
      <div className="inline-block align-middle">
        <h2 className="font-weight-normal lead">
          The page you requested was not found. <Link to="/">Back to Home</Link>
        </h2>
      </div>
    </div>
  );
};

export default NotFoundPage;
