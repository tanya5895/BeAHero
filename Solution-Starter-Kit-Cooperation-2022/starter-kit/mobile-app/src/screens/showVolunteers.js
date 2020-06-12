import React, {Component} from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';

class ShowVolunteers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.outerView}>
        <FlatList
          data={[
            {
              key: 'Devin',
              requestsPending: '10',
            },
            {key: 'Dan', requestsPending: '10'},
            {key: 'Dominic', requestsPending: '5'},
            {key: 'Jackson', requestsPending: '2'},
            {key: 'James', requestsPending: '8'},
            {key: 'Joel', requestsPending: '0'},
            {key: 'John', requestsPending: '8'},
            {key: 'Jillian', requestsPending: '10'},
            {key: 'Jimmy', requestsPending: '7'},
            {key: 'Julie', requestsPending: '6'},
            {key: 'Rahul', requestsPending: '2'},
            {key: 'Raj', requestsPending: '0'},
            {key: 'Raman', requestsPending: '0'},
            {key: 'Rajeev', requestsPending: '18'},
          ]}
          renderItem={({item}) => (
            <Text style={styles.textInput}>
              {item.key}, Pending = {item.requestsPending}, Completed ={' '}
              {item.requestsPending}
            </Text>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    padding: 42,
    backgroundColor: '#FFF',
  },
  textInput: {
    fontFamily: 'IBMPlexSans-Medium',
    flex: 1,
    borderColor: '#D0E2FF',
    borderWidth: 2,
    padding: 14,
    elevation: 2,
    marginBottom: 25,
  },
  item: {},
});

export default ShowVolunteers;
