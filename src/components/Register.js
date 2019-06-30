import React from 'react';

class Register extends React.Component {
  render() {
    return (
      <div className="register">
        <form>
          <label>
            Name:
          <input type="text" name="name" required />
          </label>
          <label>
            Email:
          <input type="text" name="email" onChange={this.handleChange} required />
          </label>
          <label>
            Password:
          <input type="text" name="password" onChange={this.handleChange} required />
          </label>
          <button className="form-btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;
