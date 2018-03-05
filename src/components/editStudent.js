import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, CardSection, Button, Confirm } from './common';
import { studentUpdate, studentSave, studentDelete } from '../actions';
import StudentForm from './studentForm';

class EditStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  componentWillMount() {
    _.each(this.props.student, (value, prop) => {
      this.props.studentUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone1, phone2, canText, email, address, instrument,
      lessonDay, lessonTime, timeInt, dateObj, hourlyRate, homework, active, notes } = this.props;

    this.props.studentSave({ name, phone1, phone2, canText, email, address,
      instrument, lessonDay, lessonTime, timeInt, dateObj, hourlyRate, homework, active, notes,
      uid: this.props.student.uid });
  }

  onConfirmAccept() {
    const { uid } = this.props.student;

    this.props.studentDelete({ uid });
  }

  openModal() {
    this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <ScrollView>
        <Card>
          <StudentForm />
          <CardSection>
            <Button style={{backgroundColor: '#007aff'}}
              onPress={this.onButtonPress.bind(this)}>
              <Icon name="save" size={20} /> Save Changes
            </Button>
          </CardSection>

          <CardSection>
            <Button style={{backgroundColor: '#f75a56'}}
              onPress={this.openModal.bind(this)}>
              <Icon name="trash" size={20} /> Delete Student
            </Button>
          </CardSection>

          <Confirm
            visible={this.state.showModal}
            onAccept={this.onConfirmAccept.bind(this)}
            onDecline={this.closeModal.bind(this)}
          >
            Are you sure you want to delete this student?
          </Confirm>
        </Card>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone1, phone2, canText, email, address, instrument,
    lessonDay, lessonTime, timeInt, dateObj, hourlyRate, homework, active, notes } = state.studentForm;

  return {
    name, phone1, phone2, canText, email, address, instrument,
      lessonDay, lessonTime, timeInt, dateObj, hourlyRate, homework, active, notes
  };
};

export default connect(mapStateToProps,
  { studentUpdate, studentSave, studentDelete })(EditStudent);
