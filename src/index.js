import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
// import thunk from 'redux-thunk';
import store from './store';
// import dataReducer from './reducers/dataReducer';
import './index.css';


ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));

