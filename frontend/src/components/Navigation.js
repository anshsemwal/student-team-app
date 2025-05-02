// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav style={{ padding: '1rem', background: '#007bff' }}>
    <Link to="/" style={{ color: '#fff', marginRight: '1rem' }}>Home</Link>
    <Link to="/add" style={{ color: '#fff', marginRight: '1rem' }}>Add Member</Link>
    <Link to="/members" style={{ color: '#fff' }}>View Members</Link>
  </nav>
);

export default Navigation;
