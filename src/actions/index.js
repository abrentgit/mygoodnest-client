// ACTION TO ADD USER
export const REGISTER_USER = 'REGISTER_USER';
export const registerUser = user => ({
    type: REGISTER_USER,
    user
});

export const GET_PRACTICES = 'GET_PRACTICES';
export const getPractices = practice => ({
    type: GET_PRACTICES,
    practice
});

