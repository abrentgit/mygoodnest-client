// QUOTES ACTIONS
import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import fetch from 'cross-fetch';

export const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS';
export const fetchQuoteSuccess = quote => ({
    type: FETCH_QUOTE_SUCCESS,
    quote
});

export const FETCH_QUOTE_ERROR = 'FETCH_QUOTE_ERROR';
export const fetchQuoteError = error => ({
    type: FETCH_QUOTE_ERROR,
    error
});

export const getQuotes = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/quotes`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-type": "application/json"
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((quote) => dispatch(fetchQuoteSuccess(quote)))
        .catch(err => {
            dispatch(fetchQuoteError(err));
        });
};