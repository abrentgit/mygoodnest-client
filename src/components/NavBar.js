import React from 'react';
import { Link } from 'react-router-dom';
// import SignedInLinks from './SignedInLinks';
// import SignedOutLinks from './SignedOutLinks';

const Navigation = () => {
  return (
    <nav className="nav-wrapper">
      <div className="menu-container">
        <h1 className="home-title">Goodnest</h1>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </div>
    </nav>
  );
};

//* <SignedInLinks /><SignedOutLinks /> */

export default Navigation;
