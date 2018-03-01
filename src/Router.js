import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import SignupForm from './components/signupForm';
import Landing from './components/landing';
import StudentList from './components/studentList';
import AddStudent from './components/addStudent';
import EditStudent from './components/editStudent';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene initial key="landing" component={Landing}
          title="Welcome to ClefNotes" />
        <Scene key="authLI">
            <Scene key="login" component={LoginForm}
              title="Please Login" />
        </Scene>
        <Scene key="authSU">
          <Scene key="signup" component={SignupForm}
            title="Create an Account" />
        </Scene>
        <Scene key="main">
          <Scene initial key="studlist" component={StudentList}
            title="Your Students" rightTitle="Add"
            onRight={() => Actions.addStudent()}/>
          <Scene
            key="addStudent"
            component={AddStudent}
            title="Add Student"/>
          <Scene
            key="editStudent"
            component={EditStudent}
            title="Student Info"/>
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
