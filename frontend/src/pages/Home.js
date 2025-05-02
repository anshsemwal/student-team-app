import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Optional: for custom styles

function Home() {
  return (
    <div className="home-container">
      <header>
        <h1>TEAM MISSILE</h1>
        <h2>Welcome to Missile Team Members Management</h2>
      </header>
      <p>Easily add and view your team members!</p>
      <div className="home-buttons">
        <Link to="/add" className="home-btn">Add Member</Link>
        <Link to="/members" className="home-btn">View Members</Link>
      </div>
    </div>
  );
}

export default Home;
