// import React from 'react';
// import Quote from './Quote';
// import EntryForm from './EntryForm';
// // import { connect } from 'react-redux'

// class Dashboard extends React.Component {
//   render() {
//     return (
//       <div className="dashboard-container">
//         <div className="quote-container">
//           <Quote />
//           <div className="entry-form-container">
//             <EntryForm />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Dashboard;

import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-email">
          Email: {this.props.email}
        </div>
        <div className="dashboard-name">Name: {this.props.name}</div>
        <div className="dashboard-protected-data">
          Protected data: {this.props.protectedData}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    email: state.auth.currentUser.email,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
