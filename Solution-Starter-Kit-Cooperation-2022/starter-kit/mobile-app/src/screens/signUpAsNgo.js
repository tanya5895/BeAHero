import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import PickerSelect from 'react-native-picker-select';
import RNPickerSelect from 'react-native-picker-select';

function SignUpAsNGO({navigation}) {
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

        <View style={styles.quantityArea}>
          <Text style={styles.label}>#Volunteers</Text>
          <TextInput
            style={styles.textInput}
            // value={item.name}
            // onChangeText={t => setItem({...item, name: t})}
            // onSubmitEditing={sendItem}
            returnKeyType="send"
            enablesReturnKeyAutomatically={true}
            placeholder="Registration ID"
            blurOnSubmit={false}
          />
        </View>
      </View>

      <Text style={styles.label}>Registration ID</Text>
      <TextInput
        style={styles.textInput}
        // value={item.contact}
        // onChangeText={t => setItem({...item, contact: t})}
        // onSubmitEditing={sendItem}
        returnKeyType="send"
        enablesReturnKeyAutomatically={true}
        placeholder="Registration ID"
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

      <Text style={styles.label}>Contact Number</Text>
      <TextInput
        style={styles.textInput}
        // value={item.contact}
        // onChangeText={t => setItem({...item, contact: t})}
        // onSubmitEditing={sendItem}
        returnKeyType="send"
        enablesReturnKeyAutomatically={true}
        placeholder="9130058565"
      />

      <Text style={styles.label}>Area of Service</Text>
      <RNPickerSelect
        style={{inputIOS: styles.selector}}
        onValueChange={value => console.log(value)}
        items={[
          {label: 'Food', value: 'food'},
          {label: 'Clothes', value: 'clothes'},
          {label: 'Electronics', value: 'electronics'},
          {label: 'Help', value: 'help'},
          {label: 'Others', value: 'others'},
        ]}
      />

      <Text style={styles.label}>Location of Service</Text>
      <RNPickerSelect
        style={{inputIOS: styles.selector}}
        onValueChange={value => console.log(value)}
        items={[
          {label: 'Agra', value: 'agra'},
          {label: 'Mumbai', value: 'mumbai'},
          {label: 'Delhi', value: 'delhi'},
          {label: 'Bangalore', value: 'blr'},
          {label: 'Others', value: 'others'},
        ]}
      />

      {/* <PickerSelect 
        style={{inputIOS: styles.selector}}
      //   value={item.type}
        //   onValueChange={t => setItem({...item, type: t})}
        items={[
          {label: 'Food', value: 'Food'},
          {label: 'Clothes', value: 'Clothes'},
          {label: 'Electronic Parts', value: 'Electronic Parts'},
          {label: 'Other', value: 'Other'},
        ]}
      /> */}
      <TouchableOpacity onPress={() => navigation.navigate('entryLoginPage')}>
        <Text style={styles.button}>Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    padding: 42,
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

export default SignUpAsNGO;
