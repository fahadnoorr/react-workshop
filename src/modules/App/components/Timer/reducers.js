import {START_TIME, STOP_TIME, UPDATE_TIME} from './actions';

const initialState = {
    time: 'Start Timer',
    active: false,
};

const timeReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_TIME:
            return {...state, active: true};
        case STOP_TIME:
            return {...state, active: false};
        case UPDATE_TIME:
            return {...state, time: action.payload};
        default:
            return state;
    }
};

export default timeReducer;