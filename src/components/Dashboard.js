import React from 'react';
import Quote from './Quote';
import EntryForm from './EntryForm';

export class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        <Quote />
        <EntryForm />
      </div>
    );
  }
}
