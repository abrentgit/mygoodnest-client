import React from 'react';

class Login extends React.Component {
  state = {

  }
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
      </form>
    );
  }
}

export default Login;
