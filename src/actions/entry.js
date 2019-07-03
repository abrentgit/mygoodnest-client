// ENTRIES ACTIONS
import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import fetch from 'cross-fetch';

export const POST_ENTRY_SUCCESS = 'POST_DATE_SUCCESS';
export const postEntrySuccess = entry => ({
    type: POST_ENTRY_SUCCESS,
    entry
});

export const POST_ENTRY_ERROR = 'POST_DATE_ERROR';
export const postEntryError = error => ({
    type: POST_ENTRY_ERROR,
    error
});

export const GET_ENTRY_SUCCESS = 'GET_DATES_SUCCESS';
export const getEntrySuccess = entry => ({
    type: GET_ENTRY_SUCCESS,
    entry
});

export const GET_ENTRY_ERROR = 'GET_DATES_ERROR';
export const getEntryError = error => ({
    type: GET_ENTRY_ERROR,
    error
});

export const GET_MY_ENTRIES_SUCCESS = 'GET_MY_DATES_SUCCESS';
export const getMyEntriesSuccess = entries => ({
    type: GET_MY_ENTRIES_SUCCESS,
    entries
});

export const GET_MY_ENTRIES_ERROR = 'GET_MY_DATES_ERROR';
export const getMyEntriesError = error => ({
    type: GET_MY_ENTRIES_ERROR,
    error
});

export const DELETE_ENTRY_SUCCESS = 'DELETE_ENTRY_SUCCESS';
export const deleteEntrySuccess = entry => ({
    type: DELETE_ENTRY_SUCCESS,
    entry
});

export const DELETE_ENTRY_ERROR = 'DELETE_ENTRY_ERROR';
export const deleteEntryError = error => ({
    type: DELETE_ENTRY_ERROR,
    error
});

// DISPATCHES

export const getEntries = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/entries`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-type": "application/json"
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((entry) => dispatch(getEntrySuccess(entry)))
        .catch(err => {
            dispatch(getEntryError(err));
        });
};

export const postEntry = (entry) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/entries`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-type": "application/json"
        },
        body: JSON.stringify(entry)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(entry => dispatch(postEntrySuccess(entry)))
        .catch(err => {
            dispatch(postEntryError(err));
        });
};

export const deleteEntry = (id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/entries/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(entry => dispatch(deleteEntrySuccess(entry)))
        .catch(err => {
            dispatch(deleteEntryError(err));
        });
}

export const getMyEntries = () => (dispatch, getState) => {
    const username = getState().auth.currentUser.username;
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/entries/${username}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-type": "application/json"
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(entry => dispatch(getMyEntriesSuccess(entry)))
        .catch(err => {
            dispatch(getMyEntriesError(err));
        });
};