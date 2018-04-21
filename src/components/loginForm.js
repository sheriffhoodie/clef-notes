import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, ImageBackground } from 'react-native';
import firebase from 'Firebase';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { EmailChanged, PasswordChanged, loginUser } from '../actions';

class LoginForm extends React.Component {
  onEmailChange(text) {
    this.props.EmailChanged(text);
  }

  onPasswordChange(text) {
    this.props.PasswordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  resetPassword() {
    firebase.auth().sendPasswordResetEmail(this.props.email).then(function() {
    // Email sent.
    }).catch(function(error) {
      // An error happened.
    });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'transparent' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  render () {
    return (
      <ImageBackground
         style={styles.imageStyle}
         source={require('../../images/black-background-image.jpg')}
       >
        <Text style={styles.textStyle}>Welcome to ClefNotes</Text>
        <Card style={styles.cardStyle}>
          <CardSection style={{backgroundColor: 'transparent'}}>
            <Input
              label="  Email"
              placeholder="user@mail.com"
              value={this.props.email}
              autoFocus={true}
              icon={<Icon name="envelope" color="#fff" size={20} />}
              keyboardType="email-address"
              onChangeText={this.onEmailChange.bind(this)}
            />
          </CardSection>

          <CardSection style={{backgroundColor: 'transparent'}}>
            <Input
              secureTextEntry
              label="Password"
              placeholder="password"
              value={this.props.password}
              autoFocus={false}
              onChangeText={this.onPasswordChange.bind(this)}
            />
          </CardSection>

          {this.renderError()}

          <CardSection style={{marginTop: 25, borderBottomWidth: 0,
              backgroundColor: 'transparent', borderColor: 'transparent'}}>
            {this.renderButton()}
          </CardSection>
        </Card>
      </ImageBackground>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontFamily: 'Thonburi-Light'
  },
  textStyle: {
    fontSize: 45,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Thonburi-Light',
    marginBottom: 35,
    marginTop: 25
  },
  imageStyle: {
    flex: 1,
    width: null,
    height: null,
  }
};

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps,
  { EmailChanged, PasswordChanged, loginUser })(LoginForm);
