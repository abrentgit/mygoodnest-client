
import { GET_PRACTICES, getPractices, GET_ENTRY, getEntry, GET_ENTRIES, getEntries, LOGIN_USER, loginUser, REGISTER_USER, registerUser } from './index';

describe('getPractices', () => {
    it('Should return practices', () => {
        const practice = 'List Practice';
        const action = getPractices(practice);
        expect(action.type).toEqual(GET_PRACTICES);
        expect(action.practice).toEqual(practice);
    });
});

describe('getEntry', () => {
    it('should get a single entry', () => {
        const entry = 'List Entry';
        const action = getEntry(entry);
        expect(action.type).toEqual(GET_ENTRY);
        expect(action.entry).toEqual(entry);
    })
})

describe('getEntries', () => {
    it('should get all entries', () => {
        const entry = 'List Entries';
        const action = getEntries(entry);
        expect(action.type).toEqual(GET_ENTRIES);
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
