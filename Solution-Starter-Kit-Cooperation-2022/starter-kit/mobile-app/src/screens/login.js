import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity style={styles.loginAsNgo}>
            <Text style={{textAlign: 'center'}}>Login as NGO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginAsUser}>
            <Text style={{textAlign: 'center'}}>Login as user</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.loginAsNgo}>
            <Text style={{textAlign: 'center'}}>Signup as NGO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginAsUser}>
            <Text style={{textAlign: 'center'}}>Signup as user</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginAsNgo: {
    width: '50%',
    height: 100,
    backgroundColor: 'pink',
  },
  loginAsUser: {
    width: '50%',
    height: 100,
    backgroundColor: 'dodgerblue',
  },
});

export default Login;
