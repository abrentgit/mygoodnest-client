import {
    POST_ENTRY_SUCCESS,
    POST_ENTRY_ERROR,
    GET_ENTRY_SUCCESS,
    GET_ENTRY_ERROR,
    GET_MY_ENTRIES_SUCCESS,
    GET_MY_ENTRIES_ERROR,
    DELETE_ENTRY_SUCCESS,
    DELETE_ENTRY_ERROR,
    GET_QUOTE_SUCCESS,
    GET_QUOTE_ERROR
} from '../actions/data';

const initialState = {
    entries: [],
    entry: {
        user: null,
        date: null,
        content: null
    },
    quotes: [],
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === POST_ENTRY_SUCCESS) {
        return Object.assign({}, state, {
            entry: action.data,
            error: null
        });
    } else if (action.type === POST_ENTRY_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === GET_MY_ENTRIES_SUCCESS) {
        return Object.assign({}, state, {
            entries: action.data,
            error: null
        });
    } else if (action.type === GET_MY_ENTRIES_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === GET_ENTRY_SUCCESS) {
        return Object.assign({}, state, {
            entry: action.data,
            error: null
        });
    } else if (action.type === GET_ENTRY_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === DELETE_ENTRY_SUCCESS) {
        return Object.assign({}, state, {
            entry: action.data,
            error: null
        });
    } else if (action.type === DELETE_ENTRY_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === GET_QUOTE_SUCCESS) {
        return Object.assign({}, state, {
            quotes: action.data,
            error: null
        });
    } else if (action.type === GET_QUOTE_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}
