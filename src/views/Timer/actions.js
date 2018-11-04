/* ACTION TYPES */

export const UPDATE_TIME = 'UPDATE_TIME';

/* ACTIONS */

export const updateTime = (time) => ({ type: UPDATE_TIME, payload: time });

/* REDUCERS */

const initialState = {
  time: '00 : 00 : 00',
};

export const timeReducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TIME:
      return { ...state, time: action.payload };
    default:
      return state;
  }
};
