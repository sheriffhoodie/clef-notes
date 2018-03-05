import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import {
  STUDENT_UPDATE,
  CLEAR_STUDENT_FORM,
  STUDENTS_FETCH_SUCCESS,
  SELECT_STUDENT
} from './types';

export const studentUpdate = ({prop, value}) => {
  return {
    type: STUDENT_UPDATE,
    payload: {prop, value}
  };
};

export const studentCreate = ({ name, phone1, phone2, email, address, canText, instrument, active, hourlyRate, homework, notes, lessonTime, timeInt, lessonDay }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/students`)
      .push({ name, phone1, phone2, email, address, canText, instrument,
        active, notes, hourlyRate, homework, lessonTime, timeInt, lessonDay })
      .then(() => {
        dispatch({ type: CLEAR_STUDENT_FORM });
        Actions.pop();
      });
  };
};

export const clearStudentForm = () => {
  return (dispatch) => dispatch({
    type: CLEAR_STUDENT_FORM
  });
};

export const studentsFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/students`)
    .on('value', snapshot => {
      dispatch({ type: STUDENTS_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
} ;

export const selectStudent = (studentId) => {
  return {
    type: SELECT_STUDENT,
    payload: studentId
  };
};

export const studentSave = ({ name, phone1, phone2, email, address, canText, instrument, active, hourlyRate, homework, notes, lessonTime, timeInt, lessonDay, uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/students/${uid}`)
    .set({ name, phone1, phone2, email, address, canText, instrument, active, hourlyRate, homework, notes, timeInt, lessonTime, lessonDay })
    .then(() => {
      dispatch({ type: CLEAR_STUDENT_FORM });
      Actions.pop();
    }
    );
  };
};

export const studentDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/students/${uid}`)
    .remove()
    .then(() => {
      Actions.pop();
    });
  };
};
