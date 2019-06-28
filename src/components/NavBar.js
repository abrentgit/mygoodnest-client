import React from 'react';
import { Link } from 'react-router-dom';
// import Login from './Login';
// import Register from './Register'

const NavBar = () => {
  return (
    <div className="nav-wrapper">
      <nav className="menu-container">
        <h3>Logo Holder</h3>
        <ul className="nav-links">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  );
};

/* <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} /> */



export default NavBar;
