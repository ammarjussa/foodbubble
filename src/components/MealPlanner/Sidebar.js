import React from 'react';

const SidebarRow = ({ text }) => {
  return (
    <div className="sidebar-row d-flex justify-content-start align-items-end pl-3">
      <p>{text}</p>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="meal-sidebar">
      <div className="sidebar-header d-flex justify-content-start align-items-end pl-3">
        <p>Calendar</p>
      </div>
      <p className="plan-text">
        I am planning for <input /> person
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
        <p className="help-text sidebar-link">Sync with calendar</p>
        <p className="help-text sidebar-link">Help me!</p>
        <p className="help-text sidebar-link">Disclaimer</p>
      </div>
    </div>
  );
};

export default Sidebar;
