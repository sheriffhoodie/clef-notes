import React from 'react';
import { Text, View, ScrollView, ImageBackground } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { studentsFetch } from '../actions';
import { Card, CardSection } from './common';

class WeekView extends React.Component {
  componentWillMount() {
    this.props.studentsFetch();
  }

  getMondays() {
    let mondays = this.props.students.filter(
      (stud) => stud.lessonDay === 'Monday');
    if (mondays.length !== 0) {
      let mondayStuds = [<Text key={mondays[0].uid}
        style={{color: 'white', fontSize: 28}}>Monday</Text>];
      for (let i = 0; i < mondays.length; i++) {
        mondayStuds.push(
          <CardSection key={i}
            style={{height: 100}}>
            <Text style={{color: 'white'}}>{mondays[i].lessonTime}</Text>
            <Text style={{color: 'white'}}>{mondays[i].name}</Text>
          </CardSection>
        );
      }
      return mondayStuds;
    } else {
      return null;
    }
  }

  getTuesdays() {
    let tuesdays = this.props.students.filter(
      (stud) => stud.lessonDay === 'Tuesday');
    if (tuesdays.length !== 0) {
      let tuesdayStuds = [<Text key={tuesdays[0].uid}
        style={{color: 'white', fontSize: 28}}>Tuesday</Text>];
      for (let i = 0; i < tuesdays.length; i++) {
        tuesdayStuds.push(
          <CardSection key={i}
            style={{height: 100}}>
            <Text style={{color: 'white'}}>{tuesdays[i].lessonTime}</Text>
            <Text style={{color: 'white'}}>{tuesdays[i].name}</Text>
          </CardSection>
        );
      }
      return tuesdayStuds;
    } else {
      return null;
    }
  }

  getWednesdays() {
    let wednesdays = this.props.students.filter(
      (stud) => stud.lessonDay === 'Wednesday');
    if (wednesdays.length !== 0) {
      let wednesdayStuds = [<Text key={wednesdays[0].uid}
        style={{color: 'white', fontSize: 28}}>Wednesday</Text>];
      for (let i = 0; i < wednesdays.length; i++) {
        wednesdayStuds.push(
          <CardSection key={i}
            style={{height: 100}}>
            <Text style={{color: 'white'}}>{wednesdays[i].lessonTime}</Text>
            <Text style={{color: 'white'}}>{wednesdays[i].name}</Text>
          </CardSection>
        );
      }
      return wednesdayStuds;
    } else {
      return null;
    }
  }

  getThursdays() {
    let thursdays = this.props.students.filter(
      (stud) => stud.lessonDay === 'Thursday');
    if (thursdays.length !== 0) {
      let thursdayStuds = [<Text key={thursdays[0].uid}
        style={{color: 'white', fontSize: 28}}>Thursday</Text>];
      for (let i = 0; i < thursdays.length; i++) {
        thursdayStuds.push(
          <CardSection key={i}
            style={{height: 100}}>
            <Text style={{color: 'white'}}>{thursdays[i].lessonTime}</Text>
            <Text style={{color: 'white'}}>{thursdays[i].name}</Text>
          </CardSection>
        );
      }
      return thursdayStuds;
    } else {
      return null;
    }
  }

  getFridays() {
    let fridays = this.props.students.filter(
      (stud) => stud.lessonDay === 'Friday');
    if (fridays.length !== 0) {
      let fridayStuds = [<Text key={fridays[0].uid}
        style={{color: 'white', fontSize: 28}}>Friday</Text>];
      for (let i = 0; i < fridays.length; i++) {
        fridayStuds.push(
          <CardSection key={i}
            style={{height: 100}}>
            <Text style={{color: 'white'}}>{fridays[i].lessonTime}</Text>
          <Text style={{color: 'white'}}>{fridays[i].name}</Text>
          </CardSection>
        );
      }
      return fridayStuds;
    } else {
      return null;
    }
  }

  getSaturdays() {
    let saturdays = this.props.students.filter(
      (stud) => stud.lessonDay === 'Saturday');
    if (saturdays.length !== 0) {
      let saturdayStuds = [<Text key={saturdays[0].uid}
        style={{color: 'white', fontSize: 28}}>Saturday</Text>];
      for (let i = 0; i < saturdays.length; i++) {
        saturdayStuds.push(
          <CardSection key={i}
            style={{height: 100}}>
            <Text style={{color: 'white'}}>{saturdays[i].lessonTime}</Text>
          <Text style={{color: 'white'}}>{saturdays[i].name}</Text>
          </CardSection>
        );
      }
      return saturdayStuds;
    } else {
      return null;
    }
  }

  getSundays() {
    let sundays = this.props.students.filter(
      (stud) => stud.lessonDay === 'Sunday');
    if (sundays.length !== 0) {
      let sundayStuds = [<Text key={sundays[0].uid}
        style={{color: 'white', fontSize: 28}}>Sunday</Text>];
      for (let i = 0; i < sundays.length; i++) {
        sundayStuds.push(
          <CardSection key={i}
            style={{height: 100}}>
            <Text style={{color: 'white'}}>{sundays[i].lessonTime}</Text>
          <Text style={{color: 'white'}}>{sundays[i].name}</Text>
          </CardSection>
        );
      }
      return sundayStuds;
    } else {
      return null;
    }
  }

  render() {
    return (
      <ImageBackground style={styles.gradientStyle}
        source={require('../../images/gradient2.png')}>
        <ScrollView>
          <Card>
            {this.getMondays()}
            {this.getTuesdays()}
            {this.getWednesdays()}
            {this.getThursdays()}
            {this.getFridays()}
            {this.getSaturdays()}
            {this.getSundays()}
          </Card>
        </ScrollView>
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

const mapStateToProps = (state) => {
  const students = _.map(state.students, (val, uid) => {
    return _.merge({}, val, {uid});
  });
  return { students };
};

export default connect(mapStateToProps, { studentsFetch })(WeekView);
