import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { studentsFetch } from '../actions';
import ListItem from './ListItem';

class StudentList extends React.Component {
  componentWillMount() {
    this.props.studentsFetch();
  }

  render() {
    return (
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
    );
  }
}

const mapStateToProps = (state) => {
  const students = _.map(state.students, (val, uid) => {
    return _.merge({}, val, {uid});
  });
  return { students };
};

export default connect(mapStateToProps, { studentsFetch })(StudentList);
