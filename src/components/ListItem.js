import React from 'react';
import { Text, View, TouchableWithoutFeedback,
  LayoutAnimation } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { CardSection, Button } from './common';
import { selectStudent } from '../actions';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandOn: false
    };
    this.changeToggle = this.changeToggle.bind(this);
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  changeToggle() {
    this.setState({ expandOn: !this.state.expandOn});
  }

  onInfoPress() {
    Actions.editStudent({ student: this.props.student });
  }

  renderInfo() {
    const { instrument, lessonDay, lessonTime } = this.props.student;
    if (this.props.expanded && this.state.expandOn) {
      return (
        <CardSection style={styles.containerStyle}>
          <View style={{flex: 1}}>
            <Text style={styles.infoTextStyle}>
              {instrument}
            </Text>
            <Text style={styles.infoTextStyle}>
              {lessonDay}s at {lessonTime}
            </Text>
          </View>
          <Button style={{flex: 1}} onPress={this.onInfoPress.bind(this)}>
            View Info
          </Button>
        </CardSection>
      );
    }
  }

  render() {
    const {name, uid} = this.props.student;
    return (
        <TouchableWithoutFeedback onPressOut={this.changeToggle}
          onPress={() => this.props.selectStudent(uid)}>
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
