import React, {Component} from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';

class PendingRequests extends Component {
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
              requestsPending: '10',
            },
            {key: '1001', requestsPending: '10'},
            {key: '1001', requestsPending: '5'},
            {key: '1001', requestsPending: '2'},
            {key: '1001', requestsPending: '8'},
            {key: '1001', requestsPending: '0'},
            {key: '1001', requestsPending: '8'},
            {key: '1001', requestsPending: '10'},
            {key: '1001', requestsPending: '7'},
            {key: '1001', requestsPending: '6'},
            {key: '1001', requestsPending: '2'},
            {key: '1001', requestsPending: '0'},
            {key: '1001', requestsPending: '0'},
            {key: '1001', requestsPending: '18'},
          ]}
          renderItem={({item}) => (
            <Text style={styles.textInput}>
              RequestId = {item.key}, TimeToCompleteHours ={' '}
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

export default PendingRequests;
