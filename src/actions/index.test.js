import { setAuthToken, clearAuth, authRequest, authSuccess, authError, SET_AUTH_TOKEN, CLEAR_AUTH, AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR } from './auth';


describe('set auth token', () => {
    it('should set auth token', () => {
        const authToken = 'set auth token';
        const action = setAuthToken(authToken);
        expect(action.type).toEqual(SET_AUTH_TOKEN);
        expect(action.authToken).toEqual(authToken);
    })
})

describe('clear auth token', () => {
    it('should clear auth token', () => {
        const action = clearAuth();
        expect(action.type).toEqual(CLEAR_AUTH);
        expect(action.clearAuth).toEqual();
    })
})

describe('requests auth', () => {
    it('should request auth', () => {
        const action = authRequest();
        expect(action.type).toEqual(AUTH_REQUEST);
        expect(action.authRequest).toEqual();
    })
})

describe('auth success', () => {
    it('should grant current user auth access', () => {
        const currentUser = 'auth user';
        const action = authSuccess(currentUser);
        expect(action.type).toEqual(AUTH_SUCCESS);
        expect(action.currentUser).toEqual(currentUser);
    })
})

describe('auth error', () => {
    it('should not grant auth access', () => {
        const error = 'no auth granted';
        const action = authError(error);
        expect(action.type).toEqual(AUTH_ERROR);
        expect(action.error).toEqual(error);
    })
})


// describe('loginUser', () => {
//     it('should login user', () => {
//         const user = 'Logged in User';
//         const action = loginUser(user);
//         expect(action.type).toEqual(LOGIN_USER);
//         expect(action.user).toEqual(user);
//     })
// })

// describe('registerUser', () => {
//     it('should register user', () => {
//         const user = 'Registered User';
//         const action = registerUser(user);
//         expect(action.type).toEqual(REGISTER_USER);
//         expect(action.user).toEqual(user)
//     })
// })
