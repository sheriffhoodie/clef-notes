import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends React.Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyA1JID6jv7mhtm5Dln8RVJTIa8MMaVMPGY",
      authDomain: "react-native-project-15e91.firebaseapp.com",
      databaseURL: "https://react-native-project-15e91.firebaseio.com",
      projectId: "react-native-project-15e91",
      storageBucket: "react-native-project-15e91.appspot.com",
      messagingSenderId: "311542279199"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
