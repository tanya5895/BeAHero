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
import PickerSelect from 'react-native-picker-select';

function SignUpAsVol({navigation}) {
  return (
    <ScrollView style={styles.outerView}>
      <View style={styles.splitView} />

      <Text style={styles.label}>Contact Number</Text>
      <TextInput
        style={styles.textInput}
        returnKeyType="send"
        enablesReturnKeyAutomatically={true}
        placeholder="8130058564"
      />
      <View style={styles.typeArea}>
        <Text style={styles.label}>NGO</Text>
        <PickerSelect
          style={{inputIOS: styles.selector}}
          //   value={item.NGO}
          onValueChange={t => console.log('hi')}
          items={[
            {label: 'NGO1', value: 'NGO1'},
            {label: 'NGO2', value: 'NGO2'},
            {label: 'NGO3', value: 'NGO3'},
            {label: 'NGO4', value: 'NGO4'},
          ]}
        />
      </View>
      <Text style={styles.label}>PPE kit ?</Text>
      <TextInput
        style={styles.textInput}
        returnKeyType="send"
        enablesReturnKeyAutomatically={true}
        placeholder="Yes/No"
      />
      <Text style={styles.label}>Speciality</Text>
      <TextInput
        style={styles.textInput}
        returnKeyType="send"
        enablesReturnKeyAutomatically={true}
        placeholder="eg:Plumbing,Doctor"
      />

      <TouchableOpacity onPress={() => navigation.navigate('volunteer')}>
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
  typeArea: {
    width: '40%',
  },
});

export default SignUpAsVol;
