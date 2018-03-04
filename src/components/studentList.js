import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { View, ImageBackground } from 'react-native';
import { studentsFetch } from '../actions';
import ListItem from './ListItem';

class StudentList extends React.Component {
  componentWillMount() {
    this.props.studentsFetch();
  }

  render() {
    return (
      <ImageBackground style={styles.gradientStyle}
        source={require('../../images/gradient2.png')}>
        <FlatList
          data={this.props.students}
          keyExtractor={(stud, index) => `${index}`}
          renderItem={({ item }) => (
            <ListItem
              student={item}
              name={item.name}
            />
          )}
        />
      </ImageBackground>
    );
  }
}

const mapStateToProps = (state) => {
  const students = _.map(state.students, (val, uid) => {
    return _.merge({}, val, {uid});
  });
  return { students };
};

const styles = {
  gradientStyle: {
    flex: 1,
    width: null,
    height: null,
  }
};

export default connect(mapStateToProps, { studentsFetch })(StudentList);
