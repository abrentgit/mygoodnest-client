import projectReducer from './projectReducer';
import authReducer from './authReducer';
import quoteReducer from './quoteReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    quotes: quoteReducer
})

export default rootReducer;