import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import { Dashboard } from './Dashboard';
import SingleEntry from './SingleEntry';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/entries/:id' component={SingleEntry} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
