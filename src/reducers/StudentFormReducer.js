import merge from 'lodash/merge';
import {
  STUDENT_UPDATE,
  CLEAR_STUDENT_FORM
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone1: '',
  phone2: '',
  email: '',
  address: '',
  canText: false,
  active: false,
  homework: '',
  notes: '',
  hourlyRate: '0',
  instrument: '',
  lessonDay: '',
  lessonTime: ''
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case STUDENT_UPDATE:
      return merge({}, state, {[action.payload.prop]: action.payload.value});
    case CLEAR_STUDENT_FORM:
      return INITIAL_STATE;
    default:
      return state;
  }
};
