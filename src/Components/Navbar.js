// Sidebar.js
import React from 'react';
import { FaHome, FaBars, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <a href="/" className="sidebar-icon">
        <FaHome size={30} />
      </a>
      <a href="#services" className="sidebar-icon">
        <FaBars size={30} />
      </a>
      <a href="#about" className="sidebar-icon">
        <FaInfoCircle size={30} />
      </a>
      <a href="#contact" className="sidebar-icon">
        <FaEnvelope size={30} />
      </a>
    </div>
  );
}

export default Sidebar;
