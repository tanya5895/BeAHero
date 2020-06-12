import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

function SignUpAsUser({navigation}) {
  return (
    <ScrollView style={styles.outerView}>
      <View style={styles.splitView}>
        <View style={styles.typeArea}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.textInput}
            // value={item.name}
            // onChangeText={t => setItem({...item, name: t})}
            // onSubmitEditing={sendItem}
            returnKeyType="send"
            enablesReturnKeyAutomatically={true}
            placeholder="Name"
            blurOnSubmit={false}
          />
        </View>

        <View style={styles.typeArea}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.textInput}
            // value={item.name}
            // onChangeText={t => setItem({...item, name: t})}
            // onSubmitEditing={sendItem}
            returnKeyType="send"
            enablesReturnKeyAutomatically={true}
            placeholder="Last Name"
            blurOnSubmit={false}
          />
        </View>
      </View>

      <Text style={styles.label}>Contact Number</Text>
      <TextInput
        style={styles.textInput}
        // value={item.contact}
        // onChangeText={t => setItem({...item, contact: t})}
        // onSubmitEditing={sendItem}
        returnKeyType="send"
        enablesReturnKeyAutomatically={true}
        placeholder="8130058564"
      />

      <Text style={styles.label}>EmailId</Text>
      <TextInput
        style={styles.textInput}
        // value={item.contact}
        // onChangeText={t => setItem({...item, contact: t})}
        // onSubmitEditing={sendItem}
        returnKeyType="send"
        enablesReturnKeyAutomatically={true}
        placeholder="name@domain.com"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.textInput}
        // value={item.contact}
        // onChangeText={t => setItem({...item, contact: t})}
        // onSubmitEditing={sendItem}
        returnKeyType="send"
        enablesReturnKeyAutomatically={true}
        placeholder="password"
        secureTextEntry
      />

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.textInput}
        // value={item.contact}
        // onChangeText={t => setItem({...item, contact: t})}
        // onSubmitEditing={sendItem}
        returnKeyType="send"
        enablesReturnKeyAutomatically={true}
        placeholder="confirm password"
        secureTextEntry
      />

      <TouchableOpacity onPress={() => navigation.navigate('entryLoginPage')}>
        <Text style={styles.button}>Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    padding: 52,
    backgroundColor: '#FFF',
  },
  splitView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: 'IBMPlexSans-Medium',
    color: '#000',
    fontSize: 14,
    paddingBottom: 5,
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
  typeArea: {
    width: '40%',
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

export default SignUpAsUser;
