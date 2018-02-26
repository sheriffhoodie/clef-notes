import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import StudentFormReducer from './StudentFormReducer';

export default combineReducers({
  auth: AuthReducer,
  studentForm: StudentFormReducer
});
