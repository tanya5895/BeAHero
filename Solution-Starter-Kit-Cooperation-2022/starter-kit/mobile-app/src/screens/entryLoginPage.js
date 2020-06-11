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
        <View style={styles.splitView}>
          <Text style={styles.label}>Id</Text>
          <TextInput
            style={styles.textInput}
            // value={item.name}
            // onChangeText={t => setItem({...item, name: t})}
            // onSubmitEditing={sendItem}
            returnKeyType="send"
            enablesReturnKeyAutomatically={true}
            placeholder="id"
            blurOnSubmit={false}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.textInput}
            // value={item.name}
            // onChangeText={t => setItem({...item, name: t})}
            // onSubmitEditing={sendItem}
            returnKeyType="send"
            enablesReturnKeyAutomatically={true}
            placeholder="password"
            blurOnSubmit={false}
            secureTextEntry
          />
        </View>
        <View style={styles.splitView}>
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('home')}
              // onPress={sendItem}
            >
              <Text style={styles.button}>Login as User</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ngoPage')}
              // onPress={sendItem}
            >
              <Text style={styles.button}>Login as NGO</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.splitView}>
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('signUpAsUser')}
              // onPress={sendItem}
            >
              <Text style={styles.button}>Register New User</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('signUpAsNgo')}
              // onPress={sendItem}
            >
              <Text style={styles.button}>Register NGO</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    // justifyContent: 'center',
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
    flex: 1,
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
  },
});

export default EntryLoginPage;
