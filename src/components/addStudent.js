import React from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
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
      lessonTime, homework, active, notes });
  }

  render() {
    return (
      <ScrollView>
        <Card>
          <StudentForm />
          <CardSection>
            <Button onPress={this.onSubmit.bind(this)}>
              Add Student
            </Button>
          </CardSection>
        </Card>
      </ScrollView>
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
