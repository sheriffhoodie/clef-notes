import { EMAIL_CHANGED,
  PASSWORD_CHANGED,
  SIGNUP_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER } from '../actions/types';
import merge from 'lodash/merge';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case EMAIL_CHANGED:
      return merge({}, state, {email: action.payload});
    case PASSWORD_CHANGED:
      return merge({}, state, {password: action.payload});
    case LOGIN_USER:
      return merge({}, state, {loading: true, error: ''});
    case SIGNUP_USER:
      return merge({}, state, {loading: true, error: ''});
    case LOGIN_USER_SUCCESS:
      return merge({}, state,
      {error: '', email: '', password: '',
        user: action.payload, loading: false});
    case LOGIN_USER_FAIL:
      return merge({}, state,
        {error: 'Authentication failed. Please try again.',
          password: '', loading: false});
    default:
      return state;
  }
};
