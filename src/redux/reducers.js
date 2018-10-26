import {combineReducers} from 'redux';
import timer from '../modules/App/components/Timer/reducers';

const rootReducer = combineReducers({
    timer,
});

export default rootReducer