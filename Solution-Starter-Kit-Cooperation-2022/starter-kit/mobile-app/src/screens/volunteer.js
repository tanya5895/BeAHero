import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
class Volunteer extends Component {
  state = {};
  render() {
    return (
      <View style={styles.view}>
        <Text>Volunteer</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: 'tomato',
  },
});

export default Volunteer;
