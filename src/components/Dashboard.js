import React from 'react';
import Quote from './Quote';
import EntryForm from './EntryForm';
import { connect } from 'react-redux'

export class Dashboard extends React.Component {
  render() {
    console.log(this.props, 'this is props on dash')
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

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes.quotes
  }
}

export default connect(mapStateToProps)(Dashboard);
