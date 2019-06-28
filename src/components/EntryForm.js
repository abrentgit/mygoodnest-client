import React from 'react';
// import { createEntry } from '../actions';
// import { connect } from 'react';

export class EntryForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>What are you grateful for today?</h2>
          <label>
            <input type="text" name="entry-text" onChange={this.handleChange} />
          </label>
          <button className="form-btn">Register</button>
        </form>
      </div>
    );
  }
}

export default EntryForm;