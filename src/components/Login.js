import React from 'react';

class Login extends React.Component {
  state = {
    email: '',
    password: ''
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
      <div className="login-container">
        <form onSubmit={this.handleSubmit}>
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

export default Login;
