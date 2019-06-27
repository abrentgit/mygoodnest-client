import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navigation = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <Link to="/" className="home-logo">
          <li>My Goodnest</li>
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};

export default Navigation;
