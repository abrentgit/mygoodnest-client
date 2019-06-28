import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <form>
          <label>
            Email:
          <input type="text" name="email" onChange={this.handleChange} required />
          </label>
          <label>
            Password:
          <input type="text" name="password" required />
          </label>
          <button className="form-btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
