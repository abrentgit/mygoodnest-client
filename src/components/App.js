import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
// import { Dashboard } from './Dashboard';
// import SingleEntry from './SingleEntry';
// import Login from './Login';
// import Register from './Register';
// import EntryForm from './EntryForm';
// import About from './About'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

//* <Route path='/create' component={EntryForm} />
// <Route path='/about' component={About} /> 

//* <Route path='/entries/:id' component={SingleEntry} /> */


export default App;
