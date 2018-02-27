import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import StudentFormReducer from './StudentFormReducer';
import StudentReducer from './StudentReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  auth: AuthReducer,
  studentForm: StudentFormReducer,
  students: StudentReducer,
  selectedStudentId: SelectionReducer
});
