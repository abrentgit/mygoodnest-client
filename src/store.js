// import entryReducer from './entryReducer';
// import authReducer from './authReducer';
// import quoteReducer from './quoteReducer';
// import { combineReducers } from 'redux';

// const store = combineReducers({
//     auth: authReducer,
//     entries: entryReducer,
//     quotes: quoteReducer
// })

// export default store;

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { loadAuthToken } from './localStorage';
import authReducer from './reducers/authReducer';
import dataReducer from './reducers/dataReducer';
import { setAuthToken, refreshAuthToken } from './actions/auth';
import { getQuotes } from './actions/quote';
import { fetchProtectedDataSuccess, fetchProtectedDataError } from './actions/data';


const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        protectedData: dataReducer
    }),
    applyMiddleware(thunk, logger)
);

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
    store.dispatch(fetchProtectedDataSuccess());
    store.dispath(fetchProtectedDataError());
    store.dispatch(getQuotes());
}

export default store;