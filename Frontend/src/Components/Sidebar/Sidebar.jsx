// src/Components/Sidebar/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard Menu</h2>
      <ul>
        <li><Link to="/steam">Steam</Link></li>
        <li><Link to="/water">Water</Link></li>
        <li><Link to="/fuel">Fuel</Link></li>
        <li><Link to="/co2">CO2</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
