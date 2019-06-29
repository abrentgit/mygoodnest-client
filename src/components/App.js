import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';
import About from './About'
import Home from './Home';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';;

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
          <Dashboard />
        </div>
      </Router>
    );
  }
}

// MATE A ROUTE PATH FOR THE DASH

// MAKE A DASHBOARD - THAT HOUSES ENTRY FORM AND QUOTE

//<BrowserRouter>
//<Route exact path="/" component={Home} />
// </BrowserRouter>

//* <Route path='/create' component={EntryForm} />
// <Route path='/about' component={About} /> 

//* <Route path='/entries/:id' component={SingleEntry} /> */


export default App;
