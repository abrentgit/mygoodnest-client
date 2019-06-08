import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Contact from './Contact';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Well Nest</h1>
          <ul className="header">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className="content" />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
