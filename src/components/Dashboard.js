import React from 'react';
import Quote from './Quote';
import EntryForm from './EntryForm';
// import { connect } from 'react-redux'

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        <div className="quote-container">
          <Quote />
          <div className="entry-form-container">
            <EntryForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

// const mapStateToProps = (state) => {
//   return {
//     entries: state.entries.entries
//   }
// }

// export default connect(mapStateToProps)(Dashboard);
