export const START_TIME = 'START_TIME';
export const STOP_TIME = 'STOP_TIME';
export const UPDATE_TIME = 'UPDATE_TIME';

export const startTime = () => ({type: START_TIME});
export const stopTime = () => ({type: STOP_TIME});
export const updateTime = (time) => ({type: UPDATE_TIME, payload: time});