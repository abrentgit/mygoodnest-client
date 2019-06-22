export const GET_PRACTICES = 'GET_PRACTICES';
export const getPractices = practice => ({
    type: GET_PRACTICES,
    practice
});

// get entry 

export const GET_ENTRY = 'GET_ENTRY';
export const getEntry = entry => ({
    type: GET_ENTRY,
    entry
})

// get users

export const GET_USERS = 'GET_USERS';
export const getUsers = user => ({
    type: GET_USERS,
    user
})

// loginuser

export const LOGIN_USER = 'LOGIN_USER';
export const loginUser = user => ({
    type: LOGIN_USER,
    user
})

// registeruser

export const REGISTER_USER = 'REGISTER_USER';
export const registerUser = user => ({
    type: REGISTER_USER,
    user
})

