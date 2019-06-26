import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store';
import App from './components/App';
// import { BrowserRouter } from 'react-router-dom';
import './index.css';

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