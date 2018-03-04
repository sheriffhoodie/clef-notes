import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, View } from 'react-native';
import LoginForm from './components/loginForm';
import SignupForm from './components/signupForm';
import Landing from './components/landing';
import StudentList from './components/studentList';
import AddStudent from './components/addStudent';
import EditStudent from './components/editStudent';
import WeekView from './components/weekView';

const renderSettingsButton = () => {
  return (
    <TouchableOpacity style={{paddingLeft: 10}}
        onPress={() => {}}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="cog" size={25} />
        </View>
    </TouchableOpacity>
  );
};

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
            title="Your Students"
            rightTitle={<Icon name="user-plus" size={25} />}
            leftTitle={<Icon name="calendar" size={25} />}
            onLeft={() => Actions.week()}
            onRight={() => Actions.addStudent()}/>
          <Scene key="week" component={WeekView}
            title="Your Week" leftTitle={<Icon name="cog" size={25} />}
            rightTitle={<Icon name="users" size={25} />}
            renderBackButton={()=> renderSettingsButton()}
            onRight={() => Actions.studlist()}/>
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
