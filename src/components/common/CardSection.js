import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#000',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#2BCECB',
    position: 'relative',
    alignItems: 'center',
  }
};

export { CardSection };
