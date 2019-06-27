import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import store from './store';
import App from './components/App';
// import { BrowserRouter } from 'react-router-dom';
import './index.css';

const store = createStore();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// ReactDOM.render(
//   {<Provider store={store}>}
//     <App />,
//   {</Provider>}
//   document.getElementById('root')
// );