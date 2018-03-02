import React from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
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
      <ImageBackground
         style={styles.imageStyle}
         source={require('../../images/black-background-image.jpg')}
       >
        <View style={styles.viewStyle}>
          <Image
            style={styles.pictureStyle}
            resizeMode='cover'
            source={require('../../images/clefnotes-logo.png')} />
        </View>
        <Card style={styles.cardStyle}>
          <CardSection style={{marginTop: 25, borderBottomWidth: 0, backgroundColor: 'transparent', borderColor: 'transparent'}}>
            <Button onPress={this.LoginPress.bind(this)}>
              Login
            </Button>
          </CardSection>

          <CardSection style={{marginTop: 22, borderBottomWidth: 0, backgroundColor: 'transparent', borderColor: 'transparent'}}>
            <Button onPress={this.SignupPress.bind(this)}>
              Create an Account
            </Button>
          </CardSection>
        </Card>
      </ImageBackground>
    );
  }
}

const styles = {
  cardStyle: {
    borderWidth: 0
  },
  pictureStyle: {
    width: 340,
    height: 340,
    marginLeft: 15,
    marginTop: 25,
    marginRight: 15,
    marginBottom: 20
  },
  imageStyle: {
    flex: 1,
    width: null,
    height: null
  }
};

export default Landing;
