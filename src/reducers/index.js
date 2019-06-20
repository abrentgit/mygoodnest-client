import GET_PRACTICES, { getPractices } from '../actions/index';

const initialState = {
    practices: []
};

export const getPractices = (state = initialState, action) => {
    if (action.type === GET_PRACTICES) {
        return Object.assign({}, state, {
            practices: state.practices.concat(action.payload)
        });
    }
    return state;
}
