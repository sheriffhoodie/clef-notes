import React from 'react';
import { Text, View, TouchableWithoutFeedback,
  LayoutAnimation } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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

  onEmailPress() {
    Communications.email([this.props.student.email], null, null, null, null);
  }

  onTextPress() {
    Communications.text(this.props.student.phone1);
  }

  renderContent() {
    const { instrument, lessonDay, lessonTime, canText } = this.props.student;
    if (this.props.expanded && this.state.expandOn) {
      if (canText === true) {
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
            <View style={styles.viewStyle}>
              <Button style={{backgroundColor: "#4cd964"}}
                onPress={this.onCallPress.bind(this)}>
                <Icon name="phone" size={20} /> Call
              </Button>
              <Button style={{backgroundColor: "#007aff"}}
                onPress={this.onTextPress.bind(this)}>
                <Icon name="comment" size={20} /> Text
              </Button>
              <Button onPress={this.onInfoPress.bind(this)}>
                <Icon name="info-circle" size={20} /> Info
              </Button>
            </View>
          </CardSection>
        );
      } else {
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
            <View style={styles.viewStyle}>
              <Button style={{backgroundColor: "#4cd964"}}
                onPress={this.onCallPress.bind(this)}>
                <Icon name="phone" size={20} /> Call
              </Button>
              <Button style={{backgroundColor: "#4cd964"}}
                onPress={this.onEmailPress.bind(this)}>
                <Icon name="envelope" size={20} /> Email
              </Button>
              <Button onPress={this.onInfoPress.bind(this)}>
                <Icon name="info-circle" size={20} /> Info
              </Button>
            </View>
          </CardSection>
        );
      }
    }
  }

  render() {
    const {name, uid} = this.props.student;
    return (
        <TouchableWithoutFeedback onPressOut={this.changeToggle}
          onPress={() => this.props.selectStudent(uid)}>
          <View>
            <CardSection
              style={{
                height: 65,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                alignItems: 'center'}}>
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
    paddingLeft: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignItems: 'flex-start'
  },
  infoTextStyle: {
    fontSize: 17,
    color: '#fff',
    fontFamily: 'Thonburi-Light',
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 7
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedStudentId === ownProps.student.uid;
  return { expanded };
};

export default connect(mapStateToProps, { selectStudent })(ListItem);
