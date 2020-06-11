import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
class LoginAsUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <Text style={{fontSize: 25}}>Id/Username</Text>
          <TextInput placeholder="Id/Username" />
        </View>
        <View style={styles.input}>
          <Text style={{fontSize: 25}}>Password</Text>
          <TextInput secureTextEntry placeholder="password" />
        </View>
        <View style={styles.loginBtn}>
          <TouchableOpacity>
            <Text>Login</Text>
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
    flexDirection: 'column',
    width: '100%',
    backgroundColor: 'dodgerblue',
  },
  input: {
    height: 100,
  },
  loginBtn: {
    backgroundColor: 'yellow',
  },
});

export default LoginAsUser;
