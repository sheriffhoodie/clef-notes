import React from 'react';
import { Text, View, ScrollView, ImageBackground } from 'react-native';

class WeekView extends React.Component {
  render() {
    return (
      <ImageBackground style={styles.gradientStyle}
        source={require('../../images/gradient2.png')}>
        <Text style={{color: '#fff', fontSize: 20}}>
          This is the weekly view.
        </Text>
      </ImageBackground>
    );
  }
}

const styles = {
  gradientStyle: {
    flex: 1,
    width: null,
    height: null,
  }
};

export default WeekView;
