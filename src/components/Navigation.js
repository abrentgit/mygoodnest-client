import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Login from './Login';

const Navigation = () => {
  return (
    <div>
      <NavLink to="/login">
        <li>Login</li>
      </NavLink>
      <Route exact path="/login" component={Login} />
    </div>
  );
};

export default Navigation;
