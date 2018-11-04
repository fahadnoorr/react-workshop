import { combineReducers } from 'redux';

import { timeReducers } from '../views/Timer/actions';

const rootReducer = combineReducers({
  timer: timeReducers,
});

export default rootReducer;
