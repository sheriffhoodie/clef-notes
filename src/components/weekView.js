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
        style={styles.titleStyle}>Monday</Text>];

      mondays = mondays.sort(function(a, b) {
        return a.timeInt - b.timeInt;
      });

      for (let i = 0; i < mondays.length; i++) {
        mondayStuds.push(
          <CardSection key={i}
            style={styles.containerStyle}>
            <Text style={styles.innerTextStyle}>
              {mondays[i].lessonTime}</Text>
            <Text style={styles.innerTextStyle2}>
              {mondays[i].name}</Text>
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
        style={styles.titleStyle}>Tuesday</Text>];

      tuesdays = tuesdays.sort(function(a, b) {
        return a.timeInt - b.timeInt;
      });

      for (let i = 0; i < tuesdays.length; i++) {
        tuesdayStuds.push(
          <CardSection key={i}
            style={styles.containerStyle}>
            <Text style={styles.innerTextStyle}>
              {tuesdays[i].lessonTime}</Text>
            <Text style={styles.innerTextStyle2}>
              {tuesdays[i].name}</Text>
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
        style={styles.titleStyle}>Wednesday</Text>];

      wednesdays = wednesdays.sort(function(a, b) {
        return a.timeInt - b.timeInt;
      });

      for (let i = 0; i < wednesdays.length; i++) {
        wednesdayStuds.push(
          <CardSection key={i}
            style={styles.containerStyle}>
            <Text style={styles.innerTextStyle}>
              {wednesdays[i].lessonTime}</Text>
            <Text style={styles.innerTextStyle2}>
              {wednesdays[i].name}</Text>
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
        style={styles.titleStyle}>Thursday</Text>];

      thursdays = thursdays.sort(function(a, b) {
        return a.timeInt - b.timeInt;
      });

      for (let i = 0; i < thursdays.length; i++) {
        thursdayStuds.push(
          <CardSection key={i}
            style={styles.containerStyle}>
            <Text style={styles.innerTextStyle}>
              {thursdays[i].lessonTime}</Text>
            <Text style={styles.innerTextStyle2}>
              {thursdays[i].name}</Text>
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
        style={styles.titleStyle}>Friday</Text>];

      fridays = fridays.sort(function(a, b) {
        return a.timeInt - b.timeInt;
      });

      for (let i = 0; i < fridays.length; i++) {
        fridayStuds.push(
          <CardSection key={i}
            style={styles.containerStyle}>
            <Text style={styles.innerTextStyle}>
              {fridays[i].lessonTime}</Text>
            <Text style={styles.innerTextStyle2}>
              {fridays[i].name}</Text>
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
        style={styles.titleStyle}>Saturday</Text>];

      saturdays = saturdays.sort(function(a, b) {
        return a.timeInt - b.timeInt;
      });

      for (let i = 0; i < saturdays.length; i++) {
        saturdayStuds.push(
          <CardSection key={i}
            style={styles.containerStyle}>
            <Text style={styles.innerTextStyle}>
              {saturdays[i].lessonTime}</Text>
            <Text style={styles.innerTextStyle2}>
              {saturdays[i].name}</Text>
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
        style={styles.titleStyle}>Sunday</Text>];

      sundays = sundays.sort(function(a, b) {
        return a.timeInt - b.timeInt;
      });

      for (let i = 0; i < sundays.length; i++) {
        sundayStuds.push(
          <CardSection key={i}
            style={styles.containerStyle}>
            <Text style={styles.innerTextStyle}>
              {sundays[i].lessonTime}</Text>
            <Text style={styles.innerTextStyle2}>
              {sundays[i].name}</Text>
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
  },
  titleStyle: {
    color: 'white',
    fontSize: 28,
    paddingTop: 12,
    marginLeft: 8,
    marginRight: 8
  },
  innerTextStyle: {
    color: '#fff',
    fontSize: 15,
    paddingLeft: 10
  },
  innerTextStyle2: {
    color: '#fff',
    fontSize: 20,
    paddingLeft: 20
  },
  containerStyle: {
    height: 50,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    marginLeft: 8,
    marginRight: 8
  }
};

const mapStateToProps = (state) => {
  const students = _.map(state.students, (val, uid) => {
    return _.merge({}, val, {uid});
  });
  return { students };
};

export default connect(mapStateToProps, { studentsFetch })(WeekView);
