import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, View, Text } from 'react-native';
import Firebase from 'firebase';
import ModalDropdown from 'react-native-modal-dropdown';
import LoginForm from './components/loginForm';
import SignupForm from './components/signupForm';
import Landing from './components/landing';
import StudentList from './components/studentList';
import AddStudent from './components/addStudent';
import EditStudent from './components/editStudent';
import WeekView from './components/weekView';

const renderSettingsButton = () => {
  return (
    <ModalDropdown
      options={[<View style={styles.viewStyle}><Icon name="sign-out" size={20}/>
      <Text style={styles.dropTextStyle}>Log Out</Text></View>]}
      style={styles.dropdownButtonStyle}
      dropdownStyle={styles.dropStyle}
      dropdownTextStyle={styles.dropTextStyle}
      onSelect={() => Firebase.auth().signOut().then(() => Actions.landing())}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon name="cog" size={25} />
      </View>
    </ModalDropdown>
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

const styles = {
  dropdownButtonStyle: {
    marginLeft: 12
  },
  dropStyle: {
    height: 45,
    width: 150,
    borderColor: '#2BCECB',
    borderWidth: 3,
    borderRadius: 5
  },
  dropTextStyle: {
    fontSize: 18,
    fontFamily: 'Thonburi-Light',
    alignSelf: 'center',
    color: '#000',
    marginLeft: 6
  },
  viewStyle: {
    width: 150,
    height: 45,
    paddingLeft: 11,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export default RouterComponent;
