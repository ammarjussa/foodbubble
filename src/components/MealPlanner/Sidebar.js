import React from 'react';

const SidebarRow = ({ text }) => {
  return (
    <div
      className="sidebar-row d-flex justify-content-start align-items-end pl-3"
      style={{  }}
    >
      <p>{text}</p>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div>
      <div
        className="d-flex justify-content-start align-items-end pl-3"
        style={{ height: '60px', backgroundColor: '#269fca' }}
      >
        <p style={{ fontSize: '20px', color: 'white' }}>Calendar</p>
      </div>
      <p style={{ fontSize: '15px', paddingTop: '10px' }}>
        I am planning for{' '}
        <input style={{ width: '40px', border: '1px solid silver', outline: 'none' }} /> person
      </p>
      <SidebarRow text="Custom Foods" />
      <SidebarRow text="Recipes" />
      <SidebarRow text="Products" />
      <SidebarRow text="Menu Items" />
      <SidebarRow text="Meal Plans" />
      <div className="pt-2" />
      <div style={{ border: '1px solid gray' }} />
      <SidebarRow text="Shopping List" />
      <div className="pt-4">
        <p className="help-text">Sync with calendar</p>
        <p className="help-text">Help me!</p>
        <p className="help-text">Disclaimer</p>
      </div>
    </div>
  );
};

export default Sidebar;
