import React, {Component} from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';

class CompletedRequests extends Component {
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
              key: '1001',
              requestsPending: 'A',
            },
            {key: '1001', requestsPending: 'B'},
            {key: '1001', requestsPending: 'C'},
            {key: '1001', requestsPending: 'D'},
            {key: '1001', requestsPending: 'E'},
            {key: '1001', requestsPending: 'F'},
            {key: '1001', requestsPending: 'G'},
            {key: '1001', requestsPending: 'H'},
            {key: '1001', requestsPending: 'I'},
            {key: '1001', requestsPending: 'J'},
            {key: '1001', requestsPending: 'K'},
            {key: '1001', requestsPending: 'L'},
            {key: '1001', requestsPending: 'M'},
            {key: '1001', requestsPending: 'N'},
          ]}
          renderItem={({item}) => (
            <Text style={styles.textInput}>
              RequestId = {item.key}, Volunteer = {item.requestsPending}
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

export default CompletedRequests;
