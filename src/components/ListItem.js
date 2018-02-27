import React from 'react';
import { Text, View, TouchableWithoutFeedback,
  LayoutAnimation } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { selectStudent } from '../actions';

class ListItem extends React.Component {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  renderInfo() {
    const { instrument, lessonDay, lessonTime } = this.props.student;
    if (this.props.expanded) {
      return (
        <CardSection style={styles.containerStyle}>
          <Text style={styles.infoTextStyle}>
            {instrument}
          </Text>
          <Text style={styles.infoTextStyle}>
            {lessonDay}
          </Text>
          <Text style={styles.infoTextStyle}>
            {lessonTime}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const {name, uid} = this.props.student;
    return (
        <TouchableWithoutFeedback onPress={() => this.props.selectStudent(uid)}>
          <View>
            <CardSection>
              <Text style={styles.titleStyle}>
                {name}
              </Text>
            </CardSection>
          {this.renderInfo()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 23,
    paddingLeft: 15,
    color: '#2BCECB',
    fontWeight: 'bold',
    fontFamily: 'Futura'
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 15
  },
  infoTextStyle: {
    fontSize: 17,
    color: '#fff',
    fontFamily: 'Futura'
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedStudentId === ownProps.student.uid;
  return { expanded };
};

export default connect(mapStateToProps, { selectStudent })(ListItem);
