// GET ENTRIES, GET QUOTES ONCE YOU HIT DASHBOARD

import React from 'react';
import { connect } from 'react-redux';
import RequiresLogin from './RequiresLogin';
import { fetchProtectedData } from '../actions/data';
import { Quote } from './Quote';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-name">Hello: {this.props.name}</div>
        <div className="dashboard-protected-data">
          <Quote />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    email: state.auth.currentUser.email,
    name: `${currentUser.name}`,
    protectedData: state.protectedData.data
  };
};

export default RequiresLogin()(connect(mapStateToProps)(Dashboard));
