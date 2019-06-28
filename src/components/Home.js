import React from 'react';
import Login from './Login'
import Register from './Register';
import NavBar from './NavBar';
import { Switch, Route } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    )
  }
}
