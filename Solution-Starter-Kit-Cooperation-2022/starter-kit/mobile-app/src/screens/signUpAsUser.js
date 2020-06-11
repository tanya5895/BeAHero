import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

class SignUpAsUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <Text>Name</Text>
          <TextInput
            style={{backgroundColor: '#fff'}}
            placeholder="name"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.input}>
          <Text>Number</Text>
          <TextInput
            style={{backgroundColor: '#fff'}}
            placeholder="number"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.input}>
          <Text>EmailId</Text>
          <TextInput
            style={{backgroundColor: '#fff'}}
            placeholder="emailid"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.input}>
          <Text>Password</Text>
          <TextInput
            style={{backgroundColor: '#fff'}}
            placeholder="Password"
            placeholderTextColor="grey"
            secureTextEntry
          />
        </View>
        <View style={styles.input}>
          <Text>Confirm Password</Text>
          <TextInput
            style={{backgroundColor: '#fff'}}
            placeholder="Confirm Password"
            placeholderTextColor="grey"
            secureTextEntry
          />
        </View>
        <View style={styles.registerBtn}>
          <TouchableOpacity>
            <Text>Register</Text>
          </TouchableOpacity>
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
  },
  input: {
    height: 40,
    width: '90%',
    justifyContent: 'space-between',
  },
  registerBtn: {
    height: 50,
    width: '90%',
    backgroundColor: 'yellow',
    margin: 10,
  },
});

export default SignUpAsUser;
