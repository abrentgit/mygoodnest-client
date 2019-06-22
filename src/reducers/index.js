import GET_PRACTICES from '../actions/index';

const initialState = {
    practices: []
};

export const practicesReducer = (state = initialState, action) => {
    if (action.type === GET_PRACTICES) {
        return Object.assign({}, state, {
            practices: state.practices.concat(action.payload)
        });
    }
    return state;
}

