import React from 'react';

class Register extends React.Component {
  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
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

export default Register;
