import React, {Component} from 'react';
import {View, Text, Alert, Button} from 'react-native';

class Donate extends Component {
  state = {};
  render() {
    return (
      <View>
        <Text>Donate</Text>
        <Button title="send" />
      </View>
    );
  }
}

export default Donate;
