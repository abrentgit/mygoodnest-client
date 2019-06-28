// const initialState = {
//     entries: [
//         { id: '1', user: 'John Wick', date: 'April 30th, 2020', content: 'The birds are rare tonight' },
//         { id: '2', user: 'Anthony James', date: 'May 30th, 2020', content: 'The songs are so fresh' },
//         { id: '3', user: 'Bill Peters', date: 'March 30th, 2020', content: 'The wind is so good' }
//     ]
// };

// const entryReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'CREATE_ENTRY':
//             console.log('created entry working', action.entry)
//     }
//     return state
// }

// export default entryReducer;

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

// // export const entryReducer = (state = entryTest, action) => {

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