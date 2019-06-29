
// import authReducer from './authReducer';
import reducer, { initialState } from './dataReducer';

describe('data reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })
});


// import { registerUser, addEntry } from '../actions';
// import { entryReducer, registerReducer } from './index';

// // describe('entry reducer', () => {
// //     it('should return current state on unknown action', () => {
// //         let currentState = {};
// //         const state = entryReducer(currentState, { type: '_UNKNOWN' });
// //         expect(state).toBe(currentState);
// //     });

// //     describe('get Entry', () => {
// //         it('should get entry', () => {
// //             let state;
// //             state = entryReducer(state, addEntry({ type: 'ADD_ENTRY' }));
// //             expect(state).toEqual({
// //                 mood: 'Good',
// //                 hours: '8-10',
// //                 practices: ['Yoga', 'Meditation'],
// //                 content: 'Today I went sailing',
// //                 date: '2019-12-12'
// //             })
// //         })
// //     })
// // })

// describe('register reducer', () => {
//     it('should return current state on unknown action', () => {
//         let currentState = {};
//         const state = registerReducer(currentState, { type: '_UNKNOWN' });
//         expect(state).toBe(currentState);
//     })

//     describe('register user', () => {
//         it('register a new user', () => {
//             let state;
//             state = registerReducer(state, registerUser({ type: 'REGISTER_USER' }));
//             expect(state).toEqual({
//                 name: 'Kurt Simon',
//                 email: 'kurt@me.com'
//             })
//         })
//     })
// })