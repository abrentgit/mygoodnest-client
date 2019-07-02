import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../localStorage';

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <button className="logout" onClick={() => this.logOut()}>Logout</button>
      );
    }
    return (
      <div className="header-bar">
        <nav className="menu-container">
          <h1>Goodnest</h1>
          <ul className="nav-links">
            <li><Link to="/about">About</Link></li>
            <li>{logOutButton}</li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);