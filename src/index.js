import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import store from './store';
import App from './components/App';
import rootReducer from './reducers/rootReducer'
// import { BrowserRouter } from 'react-router-dom';
import './index.css';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);