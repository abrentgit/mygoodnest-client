import React from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import Login from './Login';
import About from './About'
import Home from './Home';
import { refreshAuthToken } from '../actions/auth';
import { Route, BrowserRouter as Router, Switch, withRouter } from 'react-router-dom';
import RegisterPage from './RegisterPage';

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={RegisterPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));

// MATE A ROUTE PATH FOR THE DASH

// MAKE A DASHBOARD - THAT HOUSES ENTRY FORM AND QUOTE

//<BrowserRouter>
//<Route exact path="/" component={Home} />
// </BrowserRouter>

//* <Route path='/create' component={EntryForm} />
// <Route path='/about' component={About} /> 

//* <Route path='/entries/:id' component={SingleEntry} /> */
