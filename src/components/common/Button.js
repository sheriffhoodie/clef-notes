import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({onPress, children}) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
    <Text style={styles.textStyle}>
      {children}
    </Text>
  </TouchableOpacity>
);

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#2BCECB',
    fontSize: 19,
    fontWeight: '800',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#000',
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#2BCECB',
    marginLeft: 5,
    marginRight: 5
  }
};

export {Button};
