import {
  SELECT_STUDENT
} from '../actions/types';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SELECT_STUDENT:
      return action.payload;
    default:
      return state;
  }
};
