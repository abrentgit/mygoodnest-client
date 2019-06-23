import { getPractices, getEntries, getEntry } from "../actions";
import { practicesReducer, entryReducer, entriesReducer } from './index';

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

describe('entry reducer', () => {
    it('should return current state on unknown action', () => {
        let currentState = {};
        const state = entryReducer(currentState, { type: '_UNKNOWN' });
        expect(state).toBe(currentState);
    });

    describe('get Entry', () => {
        it('should get entry', () => {
            let state;
            state = entryReducer(state, getEntry({ type: 'GET_ENTRY' }));
            expect(state).toEqual({
                mood: 'Good',
                hours: '8-10',
                practices: ['Yoga', 'Meditation'],
                content: 'Today I went sailing',
                date: '2019-12-12'
            })
        })
    })
})

////

describe('entries reducer', () => {
    it('should return current state on unknown action', () => {
        let currentState = {};
        const state = entriesReducer(currentState, { type: '_UNKNOWN' });
        expect(state).toBe(currentState);
    });

//     describe('get entries', () => {
//         it('should get entry', () => {
//             let state;
//             let entryOne = {
//                 "content": "Today I went sailing", "date": "2019-12-12", "hours": "8-10", "mood": "Good", "practices": ["Yoga", "Exercise"]
//             }
//                 let entryTwo = 
//                 { "content": "Today has been rough", "date": "2019-12-13", "hours": "0-4", "mood": "Bad", "practices": ["Meditation", "Walking"]};

//                 state = entriesReducer(state, getEntries({ type: 'GET_ENTRIES' }));
//                 expect(state).toEqual({
//                     [entryOne, entryTwo]
//                 })
//             })
//     })
// })










