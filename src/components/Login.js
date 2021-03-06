import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label>
          Email:
          <input type="text" name="email" required />
        </label>
        <label>
          Password:
          <input type="text" name="password" required />
        </label>
        <input type="submit" value="Submit" />
        <p>
          Don't have an account? <Link to="/register">Sign up.</Link>
        </p>
      </form>
    );
  }
}

export default Login;
