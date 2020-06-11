import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';

class SignUpAsNGO extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <Text>NGO Name</Text>
          <TextInput
            style={{backgroundColor: 'white'}}
            placeholder="NGO name"
            placeholderTextColor="grey"
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: '100%',
  },
});

export default SignUpAsNGO;
