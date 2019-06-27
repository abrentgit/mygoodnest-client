import React from 'react';

class EntryForm extends React.Component {
  state = {
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
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



// use this implementation for after
//* <form onSubmit={this.handleSubmit}>

