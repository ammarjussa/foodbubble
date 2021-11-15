import React from 'react';
import SearchHeader from '../common/SearchHeader';
import Column from './Column';
import Sidebar from './Sidebar';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const MyMealPlanner = () => {
  return (
    <div>
      <SearchHeader title=" My Meal Planner" />
      <div className="row p-5">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div>
          <div
            className="d-flex justify-content-between"
            style={{ width: '1470px', height: '30px', backgroundColor: 'darkslategray' }}
          >
            <ArrowLeftIcon htmlColor="white" style={{ fontSize: '30px', cursor: 'pointer' }} />
            <p className="text-center" style={{ color: 'ghostwhite' }}>
              Current Week
            </p>
            <ArrowRightIcon htmlColor="white" style={{ fontSize: '30px', cursor: 'pointer' }} />
          </div>
          <div className="d-flex">
            <Column day="Monday" />
            <Column day="Tuesday" />
            <Column day="Wednesday" />
            <Column day="Thursday" />
            <Column day="Friday" />
            <Column day="Saturday" />
            <Column day="Sunday" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyMealPlanner;
