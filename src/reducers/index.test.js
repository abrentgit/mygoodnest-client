import { GET_PRACTICES, getPractices } from "../actions";
import { practicesReducer } from ".";

// NEED TO IMPLEMENT REDUCER HERE


// describe('should get practices', () => {
//     it('should return the initial state', () => {

//         const practiceName3One = 'Yoga';
//         const practiceNameTwo = 'Meditation'

//         const practiceOne = {
//             name: practiceNameOne
//         }
//         const practicerTwo = {
//             name: practiceNameTwo
//         }
//         let state = {
//             practices: [practiceOne, practicerTwo]
//         };

//         const entryOne = {
//             user: 'User One',
//             mood: 'Awesome',
//             hours: '8-10',
//             practices: ['Yoga',
//                 'Meditation'
//             ],
//             content: 'The sun shined today. It was fab.',
//             date: '2019-11-12'
//         };

//         const entryTwo = {
//             user: 'User One',
//             mood: 'Awesome',
//             hours: '8-10',
//             practices: ['Yoga',
//                 'Meditation'
//             ],
//             content: 'The sun shined today. It was fab.',
//             date: '2019-11-12'
//         };

//         expect(state).toEqual({
//             practices: [
//                 {
//                     name: practiceNameOne
//                 },
//                 {
//                     name: practiceNameTwo
//                 }
//             ]
//         })
//     })
//     it('should return single entry', () => {
//         expect(state).toEqual({

//         })
//     })

// })

/// SAMPLE REDUCER TEST


describe('practices reducer', () => {

    it('should return current state on unknown action', () => {
        let currentState = {};
        const state = practicesReducer(currentState, { type: '_UNKNOWN' });
        expect(state).toBe(currentState);
    });

    describe('getPractices', () => {
        it('should get practices', () => {
            let state;
            state = practicesReducer(state, getPractices({ type: 'GET_PRACTICES' }));
            expect(state).toEqual({
                practices: []
            })
        });
    });
});



