import React from 'react';
import { Text, View, TouchableWithoutFeedback,
  LayoutAnimation } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
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
    LayoutAnimation.easeInEaseOut();
  }

  changeToggle() {
    this.setState({ expandOn: !this.state.expandOn});
  }

  onInfoPress() {
    Actions.editStudent({ student: this.props.student });
  }

  onCallPress() {
    Communications.phonecall(this.props.student.phone1, true);
  }

  renderContent() {
    const { instrument, lessonDay, lessonTime } = this.props.student;
    if (this.props.expanded && this.state.expandOn) {
      return (
        <CardSection style={styles.containerStyle}>
          <View>
            <Text style={styles.infoTextStyle}>
              {instrument}
            </Text>
            <Text style={styles.infoTextStyle}>
              {lessonDay}s at {lessonTime}
            </Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Button style={styles.phoneStyle}
              onPress={this.onCallPress.bind(this)}>
              Call
            </Button>
            <Button onPress={this.onInfoPress.bind(this)}>
              View Info
            </Button>
          </View>
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
          {this.renderContent()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 23,
    paddingLeft: 15,
    color: '#fff',
    fontFamily: 'Thonburi-Light'
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 15
  },
  infoTextStyle: {
    fontSize: 17,
    color: '#fff',
    fontFamily: 'Thonburi-Light',
    paddingLeft: 30
  },
  phoneStyle: {
    backgroundColor: 'green'
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedStudentId === ownProps.student.uid;
  return { expanded };
};

export default connect(mapStateToProps, { selectStudent })(ListItem);
