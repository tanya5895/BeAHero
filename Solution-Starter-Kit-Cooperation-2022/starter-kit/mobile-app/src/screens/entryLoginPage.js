import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
} from 'react-native';
class EntryLoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.outerView}>
        {/* <View style={styles.splitView}> */}
        {/* <View style={styles.typeArea}> */}
        <Text style={styles.label}>Id</Text>
        <TextInput
          style={styles.textInput}
          returnKeyType="send"
          enablesReturnKeyAutomatically={true}
          placeholder="id"
          blurOnSubmit={false}
          keyboardType="email-address"
        />
        {/* </View> */}
        {/* <View style={styles.typeArea}> */}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.textInput}
          returnKeyType="send"
          enablesReturnKeyAutomatically={true}
          placeholder="password"
          blurOnSubmit={false}
          keyboardType="default"
          secureTextEntry
        />
        {/* </View> */}
        {/* </View> */}
        <View style={styles.splitView}>
          <View>
            <TouchableOpacity
              // style={{border: 'bold'}}
              onPress={() => this.props.navigation.navigate('home')}>
              <Text style={styles.buttonLogin}>Login as User </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ngoPage')}>
              <Text style={styles.buttonLogin}>Login as NGO</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={styles.splitView}> */}
        {/* <View> */}
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('signUpAsUser')}>
          <Text style={styles.button}>Register New User</Text>
        </TouchableOpacity>
        {/* </View> */}
        {/* <View> */}
        <TouchableOpacity
          // style={{borderColor: 'blue'}}
          onPress={() => this.props.navigation.navigate('signUpAsNgo')}>
          <Text style={styles.button}>Register NGO</Text>
        </TouchableOpacity>
        <View style={styles.appName}>
          <Text style={styles.textCaption}>Be A Hero</Text>
          <Text>"Rejuvenating the humanity within"</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    padding: 62,
    backgroundColor: '#FFF',
  },
  splitView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  typeArea: {
    width: '40%',
  },
  label: {
    fontFamily: 'IBMPlexSans-Medium',
    color: '#000',
    fontSize: 14,
    paddingBottom: 5,
  },
  selector: {
    fontFamily: 'IBMPlexSans-Medium',
    borderColor: '#D0E2FF',
    borderWidth: 2,
    padding: 16,
    marginBottom: 25,
  },
  quantityArea: {
    width: '40%',
  },
  textInput: {
    fontFamily: 'IBMPlexSans-Medium',
    // flex: 1,
    borderColor: '#D0E2FF',
    borderWidth: 2,
    padding: 14,
    elevation: 2,
    marginBottom: 25,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  checkboxLabel: {
    fontFamily: 'IBMPlexSans-Light',
    fontSize: 13,
  },
  textInputDisabled: {
    fontFamily: 'IBMPlexSans-Medium',
    backgroundColor: '#f4f4f4',
    color: '#999',
    flex: 1,
    padding: 16,
    elevation: 2,
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#4caf50',
    color: '#FFFFFF',
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 16,
    overflow: 'hidden',
    padding: 12,
    textAlign: 'center',
    marginTop: 15,
    borderRadius: 10,
    // width: '40%',
  },
  buttonLogin: {
    // backgroundColor: '#4caf50',
    color: 'dodgerblue',
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 16,
    overflow: 'hidden',
    padding: 12,
    textAlign: 'center',
    marginTop: 0,
    borderRadius: 10,
    // borderColor: 'blue',
    // width: '40%',
  },
  appName: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 75,
  },
  textCaption: {
    fontSize: 50,
    fontFamily: 'IBMPlexSans-Medium',
    fontWeight: 'bold',
  },
});
export default EntryLoginPage;
