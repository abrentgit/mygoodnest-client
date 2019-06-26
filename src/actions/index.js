export const ADD_ENTRY = 'ADD_ENTRY';
export const addEntry = entry => ({
    type: ADD_ENTRY,
    entry
})

export const LOGIN_USER = 'LOGIN_USER';
export const loginUser = user => ({
    type: LOGIN_USER,
    user
})

export const REGISTER_USER = 'REGISTER_USER';
export const registerUser = user => ({
    type: REGISTER_USER,
    user
})

