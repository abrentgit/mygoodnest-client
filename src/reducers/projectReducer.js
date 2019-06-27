const initialState = {};

const projectReducer = (state = initialState, action) => {
    return state
}

export default projectReducer;

// // import { REGISTER_USER } from '../actions/index';

// // const initialState = {
// //     result: 1,
// //     role: '',
// //     name: '',
// //     email: '',
// //     password: ''
// // }

// // const entryTest = {
// //     mood: 'Good',
// //     hours: '8-10',
// //     practices: ['Yoga', 'Meditation'],
// //     content: 'Today I went sailing',
// //     date: '2019-12-12'
// // }

// // export const projectReducer = (state = entryTest, action) => {

// //     if (action.type === ADD_ENTRY) {
// //         return Object.assign({}, state, {
// //             entry: state.entry.concat(action.payload)
// //         });
// //     }
// //     return state;
// // }

// /// DONE 
// // register user

// export const registerReducer = (state = initialState, action) => {

//     if (action.type === REGISTER_USER) {
//         return Object.assign({}, state, {
//             user: state.user.concat(action.payload)
//         });
//     }
//     return state;
// }

// // store.subscribe(() => {
// //     console.log('Store updated', store.getState())
// // })