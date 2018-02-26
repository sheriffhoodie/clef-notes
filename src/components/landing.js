import React from 'react';
import { Text, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from './common';


class Landing extends React.Component {
  SignupPress() {
    Actions.authSU();
  }

  LoginPress() {
    Actions.authLI();
  }

  render() {
    return (
      <View>
        <View style={styles.viewStyle}>
          <Image
            style={styles.pictureStyle}
            resizeMode='cover'
            source={require('../../images/clefnotes-logo.png')} />
        </View>
      <Card style={styles.cardStyle}>
        <CardSection>
          <Button onPress={this.LoginPress.bind(this)}>
            Login
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.SignupPress.bind(this)}>
            Create an Account
          </Button>
        </CardSection>
      </Card>
      </View>
    );
  }
}

const styles = {
  cardStyle: {
    backgroundColor: 'black',
    // flex: 2
  },
  viewStyle: {
    // flex: 1
  },
  pictureStyle: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0
    width: 380,
    height: 380
  }
};

export default Landing;
