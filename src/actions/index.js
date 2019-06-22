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

// get entries

export const GET_ENTRIES = 'GET_ENTRIES';
export const getEntries = entry => ({
    type: GET_ENTRIES,
    entry
})

// loginuser

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

