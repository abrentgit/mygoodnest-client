import GET_PRACTICES, { GET_ENTRY, GET_ENTRIES } from '../actions/index';

const initialState = {
    practices: []
};

const entryTest = {
    mood: 'Good',
    hours: '8-10',
    practices: ['Yoga', 'Meditation'],
    content: 'Today I went sailing',
    date: '2019-12-12'
}

const entriesTest = [{

    mood: 'Good',
    hours: '8-10',
    practices: ['Yoga', 'Meditation'],
    content: 'Today I went sailing',
    date: '2019-12-12',
},
{
    mood: 'Bad',
    hours: '0-4',
    practices: ['Meditation', 'Walking'],
    content: 'Today has been rough',
    date: '2019-12-13'

}
]

export const practicesReducer = (state = initialState, action) => {

    if (action.type === GET_PRACTICES) {
        return Object.assign({}, state, {
            practices: state.practices.concat(action.payload)
        });
    }
    return state;
}

export const entryReducer = (state = entryTest, action) => {

    if (action.type === GET_ENTRY) {
        return Object.assign({}, state, {
            entry: state.entry.concat(action.payload)
        });
    }
    return state;
}

/// DONE 

// FOCUS ON THIS ONE

export const entriesReducer = (state = entriesTest, action) => {

    if (action.type === GET_ENTRIES) {
        return Object.assign({}, state, {
            entries: state.entries.concat(action.payload)
        });
    }
    return state;
}

