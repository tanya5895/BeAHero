import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import PickerSelect from 'react-native-picker-select';
import {TouchableOpacity} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    padding: 22,
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
    width: '250%',
  },
  buttonGroup: {
    flex: 1,
    paddingTop: 5,
    width: '100%',
    alignItems: 'center',
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
class TakeDonation extends Component {
  state = {};
  render() {
    return (
      <ScrollView style={styles.outerView}>
        <View style={styles.splitView}>
          <View style={styles.typeArea}>
            <Text style={styles.label}>Service Type</Text>
            <PickerSelect
              style={{inputIOS: styles.selector}}
              // value="some"
              onValueChange={value => console.log(value)}
              items={[
                {label: 'Food', value: 'Food'},
                {label: 'Help', value: 'Help'},
                {label: 'Other', value: 'Other'},
              ]}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonGroup}>
            <Text style={styles.button}>Search</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default TakeDonation;
