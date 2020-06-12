import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

function NgoPage({navigation}) {
  let numb = 10;
  return (
    <ScrollView style={styles.outerView}>
      <View style={styles.splitView}>
        <View style={styles.quantityArea}>
          <Text style={styles.label}>#Pending Requests</Text>
          <TextInput
            defaultValue={numb}
            style={styles.textInput}
            //   value={item.quantity}
            //   onChangeText={t => setItem({...item, quantity: t})}
            //   onSubmitEditing={sendItem}
            returnKeyType="send"
            enablesReturnKeyAutomatically={true}
            //   placeholder="e.g., 10"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.quantityArea}>
          <Text style={styles.label}>#Completed Requests</Text>
          <TextInput
            defaultValue={numb}
            style={styles.textInput}
            //   value={item.quantity}
            //   onChangeText={t => setItem({...item, quantity: t})}
            //   onSubmitEditing={sendItem}
            returnKeyType="send"
            enablesReturnKeyAutomatically={true}
            //   placeholder="e.g., 10"
            keyboardType="numeric"
          />
        </View>
      </View>
      <Text style={styles.label}>#Volunteers Without Duty</Text>
      <TextInput
        style={styles.textInput}
        //   value={item.description}
        //   onChangeText={t => setItem({...item, description: t})}
        //   onSubmitEditing={sendItem}
        returnKeyType="send"
        enablesReturnKeyAutomatically={true}
        placeholder="Number of volunteers"
        defaultValue={numb}
      />

      <TouchableOpacity onPress={() => navigation.navigate('pendingRequests')}>
        <Text style={styles.button}>Pending Requests</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('completedRequests')}>
        <Text style={styles.button}>Completed Requests</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('showVolunteers')}>
        <Text style={styles.button}>Volunteers</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity
      //  onPress={sendItem}
      >
        <Text style={styles.button}>Issues</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
      //  onPress={sendItem}
      >
        <Text style={styles.buttonContact}>Contact Us</Text>
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
  buttonContact: {
    backgroundColor: '#4caf50',
    color: '#FFFFFF',
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 16,
    overflow: 'hidden',
    padding: 12,
    textAlign: 'center',
    marginTop: 150,
    borderRadius: 10,
  },
});

export default NgoPage;
