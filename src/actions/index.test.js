
import { ADD_ENTRY, addEntry, LOGIN_USER, loginUser, REGISTER_USER, registerUser } from './index';

describe('addEntry', () => {
    it('should get a single entry', () => {
        const entry = 'List Entry';
        const action = addEntry(entry);
        expect(action.type).toEqual(ADD_ENTRY);
        expect(action.entry).toEqual(entry);
    })
})

describe('loginUser', () => {
    it('should login user', () => {
        const user = 'Logged in User';
        const action = loginUser(user);
        expect(action.type).toEqual(LOGIN_USER);
        expect(action.user).toEqual(user);
    })
})

describe('registerUser', () => {
    it('should register user', () => {
        const user = 'Registered User';
        const action = registerUser(user);
        expect(action.type).toEqual(REGISTER_USER);
        expect(action.user).toEqual(user)
    })
})
