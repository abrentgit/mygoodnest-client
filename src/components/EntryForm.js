import React from 'react';

class EntryForm extends React.Component {
  render() {
    return (
      <div>
        <h2>What are you grateful for today?</h2>
        <form>
          <input type="text" name="entry-text" />
        </form>
      </div>
    );
  }
}

export default EntryForm;

// use this implementation for after
//* <form onSubmit={this.handleSubmit}>

