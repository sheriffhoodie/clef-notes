import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { studentUpdate, studentCreate, clearStudentForm } from '../actions';
import { Card, CardSection, Button } from './common';
import StudentForm from './studentForm';

class AddStudent extends React.Component {
  componentWillMount() {
    this.props.clearStudentForm();
  }

  onSubmit() {
    const { name, phone1, phone2, canText, email, address, instrument,
      lessonDay, lessonTime, homework, active, notes } = this.props;

    this.props.studentCreate({ name, phone1, phone2, canText, email,
      address, instrument, lessonDay: lessonDay || 'Monday',
      lessonTime: lessonTime || '07:00', homework, active, notes });
  }

  render() {
    return (
      <Card>
        <StudentForm />
        <CardSection>
          <Button onPress={this.onSubmit.bind(this)}>
            Add Student
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
    const { name, phone1, phone2, canText, email, address, instrument,
      lessonDay, lessonTime, homework, active, notes } = state.studentForm;

    return { name, phone1, phone2, canText, email, address, instrument,
      lessonDay, lessonTime, homework, active, notes };
};

export default connect(mapStateToProps,
  { clearStudentForm, studentCreate, studentUpdate })(AddStudent);
