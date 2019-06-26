import React from 'react';
import { Link, Route } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import Login from './Login';

const Navigation = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <Link to="/" className="home-logo">
          <li>My Goodnest</li>
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
        <Route exact path="/login" component={Login} />
      </div>
    </nav>
  );
};

export default Navigation;
