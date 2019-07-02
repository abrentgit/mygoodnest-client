import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Login from './Login';

export function Home(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />
  }

  return (
    <div className="home">
      <h3>Welcome to Goodnest my user friend</h3>
      <Login />
      <Link to="/register">Register</Link>
    </div>
  )
}

const mapStatetoProps = state => ({
  loggedIn: state.auth.currentUser != null
});

export default connect(mapStatetoProps)(Home);

//* <Switch <Route exact path="/login" component={Login} />
//<Route exact path="/register" component={Register} />
        //</Switch> 
