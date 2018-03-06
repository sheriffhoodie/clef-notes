import React from 'react';
import { ScrollView, Text, Picker, Switch, View } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { studentUpdate } from '../actions';
import { CardSection, Input, Button } from './common';

class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: this.props.active || false,
      canText: this.props.canText || false,
      isVisible: false,
      chosenTime: this.props.lessonTime || '',
      dateObj: new Date(this.props.dateObj) || new Date()
    };
    this.onTextSwitchChange = this.onTextSwitchChange.bind(this);
    this.onActiveSwitchChange = this.onActiveSwitchChange.bind(this);
  }

  showTimePicker() {
    this.setState({ isVisible: true });
  }

  hideTimePicker() {
    this.setState({ isVisible: false });
  }

  createTimeInt(time) {
    let hour = time.slice(0, 2);
    let mins = time.slice(3, 5);
    let intString = hour + mins;
    return parseInt(intString);
  }

  convertTime(time) {
    let hour = time.slice(0, 2);
    let mins = time.slice(3, 5);
    if (parseInt(hour) < 12) {
      return hour + ":" + mins + " AM";
    } else if (parseInt(hour) === 12) {
      return hour + ":" + mins + " PM";
    } else {
      return (parseInt(hour - 12)).toString() + ":" + mins + " PM";
    }
  }

  pickTime(time) {
    this.props.studentUpdate({ prop: 'dateObj', value: time.toString() });
    time = time.toString().slice(16, 22);
    let timeInt = this.createTimeInt(time);
    this.props.studentUpdate({ prop: 'timeInt', value: timeInt});
    let newTime = this.convertTime(time);
    this.setState({ chosenTime: newTime });
    this.props.studentUpdate({ prop: 'lessonTime', value: newTime });
    this.hideTimePicker();
  }

  onTextSwitchChange(value) {
    this.setState({ canText: value });
    this.props.studentUpdate({ prop: 'canText', value});
  }

  onActiveSwitchChange(value) {
    this.setState({ toggled: value });
    this.props.studentUpdate({ prop: 'active', value});
  }

  render() {
    const chosenTime = this.state.chosenTime;
    return (
      <ScrollView>
        <CardSection>
          <Input
            label="Name"
            autoFocus={true}
            value={this.props.name}
            placeholder="Student Name"
            onChangeText={text =>
              this.props.studentUpdate({ prop: 'name', value: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Email"
            value={this.props.phone}
            keyboardType="email-address"
            placeholder="user@mail.com"
            onChangeText={text =>
              this.props.studentUpdate({ prop: 'email', value: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Primary Phone"
            keyboardType="phone-pad"
            value={this.props.phone1}
            placeholder="555-555-5555"
            onChangeText={text =>
              this.props.studentUpdate({ prop: 'phone1', value: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Secondary Phone"
            value={this.props.phone2}
            keyboardType="phone-pad"
            placeholder="555-555-5555"
            onChangeText={text =>
              this.props.studentUpdate({ prop: 'phone2', value: text })}
            />
        </CardSection>

        <CardSection>
          <Text style={styles.label3Style}>Can Text?</Text>
          <Switch
            onTintColor="#2BCECB"
            value={this.state.canText}
            onValueChange={this.onTextSwitchChange}
          >
          </Switch>
        </CardSection>

        <CardSection>
          <Input
            label="Address"
            value={this.props.address}
            placeholder="101 Main St, Cityville"
            onChangeText={text =>
              this.props.studentUpdate({ prop: 'address', value: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Hourly Rate ($)"
            value={this.props.hourlyRate}
            placeholder="Enter hourly rate"
            keyboardType="numeric"
            onChangeText={text =>
              this.props.studentUpdate({ prop: 'hourlyRate', value: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Instrument"
            value={this.props.instrument}
            placeholder="Enter instrument here"
            onChangeText={text =>
              this.props.studentUpdate({ prop: 'instrument', value: text })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.labelStyle}>Lesson Day</Text>
          <Picker
            selectedValue={this.props.lessonDay}
            itemStyle={styles.pickerItemStyle}
            onValueChange={value => this.props.studentUpdate({ prop: 'lessonDay', value })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Text style={styles.labelStyle}>Lesson Time</Text>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <Text style={styles.label2Style}>{this.state.chosenTime}</Text>
            <Button style={{backgroundColor: "#2BCECB", flex: 1}}
              onPress={this.showTimePicker.bind(this)}>
                <Icon name="clock-o" size={35} />
            </Button>
          </View>
          <DateTimePicker
            mode="time"
            date={this.state.dateObj}
            isVisible={this.state.isVisible}
            onConfirm={this.pickTime.bind(this)}
            onCancel={this.hideTimePicker.bind(this)}
            confirmTextIOS="Save"
            titleIOS="Select a Lesson Time"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Assignment"
            multiline={true}
            value={this.props.homework}
            onChangeText={text =>
              this.props.studentUpdate({ prop: 'homework', value: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Notes"
            multiline={true}
            value={this.props.notes}
            onChangeText={text =>
              this.props.studentUpdate({ prop: 'notes', value: text })}
          />
        </CardSection>

        <CardSection>
          <Text style={styles.label3Style}>Active?</Text>
          <Switch
            onTintColor="#2BCECB"
            value={this.state.toggled}
            onValueChange={this.onActiveSwitchChange}
          >
          </Switch>
        </CardSection>
      </ScrollView>
    );
  }
}

const styles = {
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  label2Style: {
    fontSize: 22,
    alignSelf: 'center',
    flex: 1,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10
  },
  label3Style: {
    fontSize: 18,
    paddingLeft: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 30
  },
  pickerItemStyle: {
    color: '#fff'
  }
};

const mapStateToProps = (state) => {
  const { name, phone1, phone2, canText, email, address, instrument,
    lessonDay, lessonTime, timeInt, dateObj, hourlyRate, homework, active, notes
  } = state.studentForm;

  return { name, phone1, phone2, canText, email, address, instrument,
    lessonDay, lessonTime, timeInt, dateObj, hourlyRate, homework, active, notes };
};

export default connect(mapStateToProps, { studentUpdate })(StudentForm);
