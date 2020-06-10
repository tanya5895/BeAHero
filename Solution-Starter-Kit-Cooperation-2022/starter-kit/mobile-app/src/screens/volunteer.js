import React, {Component} from 'react';
import {StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,Button} from 'react-native';
  import {ScrollView} from 'react-native-gesture-handler';
import PickerSelect from 'react-native-picker-select';
import {CheckedIcon, UncheckedIcon} from '../images/svg-icons';
import Geolocation from '@react-native-community/geolocation';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {addVolunteer} from '../lib/utils';

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
    text: {
      fontFamily: 'IBMPlexSans-Medium',
      color: '#000',
      fontSize: 16,
      marginBottom: 25,
      
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
    timerange:{
      flexDirection:"row",
    }
  });


  const Volunteer = function({navigation}) {
    const clearItem = {
      userID: '',
      name: '',
      location: '',
      contact: '',
      starttime:'',
      endtime:'',
      NGO:'',
    };
    const [item, setItem] = React.useState(clearItem);
    const [useLocation, setUseLocation] = React.useState(false);
    const [useNGO, setUseNGO] = React.useState(false);
    const [position, setPosition] = React.useState({});

    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    }; 
    const handleConfirm1 = (date => {
      setItem({
        ...item,
        starttime: date,
      });
      console.warn("A date has been picked: ", date);
      hideDatePicker();
    });
    const handleConfirm2 = (date => {
      setItem({
        ...item,
        endtime: date,
      });
      console.warn("A date has been picked: ", date);
      hideDatePicker();
    });
    
  
    React.useEffect(() => {
      Geolocation.getCurrentPosition(pos => {
        setPosition(pos);
        if (useLocation) {
          setItem({
            ...item,
            location: `${pos.coords.latitude},${pos.coords.longitude}`,
          });
        }
      });
    }, []);
  
    const toggleUseLocation = () => {
      if (!useLocation && position) {
        setItem({
          ...item,
          location: `${position.coords.latitude},${position.coords.longitude}`,
        });
      }
      setUseLocation(!useLocation);
    };
    const toggleNGO = () => {
      if (!useNGO) {
        setItem({
          ...item,
          NGO: `${position.coords.latitude},${position.coords.longitude}`,
        });
      }
      setUseNGO(!useNGO);
    };
  
    const sendItem = () => {
      const payload = {
        ...item,
       
      };
  
      addVolunteer(payload)
        .then(() => {
          Alert.alert('Thank you!', 'You for registration.', [{text: 'OK'}]);
          setItem({...clearItem, location: payload.location});
        })
        .catch(err => {
          console.log(err);
          Alert.alert(
            'ERROR',
            'Please try again. If the problem persists contact an administrator.',
            [{text: 'OK'}],
          );
        });
    };
  
    return (
      <ScrollView style={styles.outerView}>
        {/* <View style={styles.splitView}>
          <View style={styles.typeArea}>
            <Text style={styles.label}>Type</Text>
            <PickerSelect
              style={{inputIOS: styles.selector}}
              value={item.type}
              onValueChange={t => setItem({...item, type: t})}
              items={[
                {label: 'Food', value: 'Food'},
                {label: 'Help', value: 'Help'},
                {label: 'Other', value: 'Other'},
              ]}
            />
          </View>
          <View style={styles.quantityArea}>
            <Text style={styles.label}>Quantity</Text>
            <TextInput
              style={styles.textInput}
              value={item.quantity}
              onChangeText={t => setItem({...item, quantity: t})}
              onSubmitEditing={sendItem}
              returnKeyType="send"
              enablesReturnKeyAutomatically={true}
              placeholder="e.g., 10"
              keyboardType="numeric"
            />
          </View>
        </View> */}
  
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.textInput}
          value={item.name}
          onChangeText={t => setItem({...item, name: t})}
          onSubmitEditing={sendItem}
          returnKeyType="send"
          enablesReturnKeyAutomatically={true}
          placeholder="Full Name"
          blurOnSubmit={false}
        />
        <Text style={styles.label}>Contact Number</Text>
        <TextInput
          style={styles.textInput}
          value={item.contact}
          onChangeText={t => setItem({...item, contact: t})}
          onSubmitEditing={sendItem}
          returnKeyType="send"
          enablesReturnKeyAutomatically={true}
          placeholder="Mobile number"
          textContentType='telephoneNumber'
        />
        <Text style={styles.label}>Available Timings</Text>
          <View style={styles.timerange}>

          <View style={{flex:1}}>
         
          <TextInput   
          style={styles.textInput} 
          onFocus={showDatePicker}
          value={item.starttime}
          onChangeText={t => setItem({...item, starttime: t})}
          placeholder="start time"
          ></TextInput>
        <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm1}
        onCancel={hideDatePicker}
      />
     
      </View>

        <View style={{flex:1}}>
        <TextInput   
          style={styles.textInput} 
          onFocus={showDatePicker}
          value={item.endtime}
          onChangeText={t => setItem({...item, endtime: t})}
          placeholder="end time"
          ></TextInput>
        <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm2}
        onCancel={hideDatePicker}
      />
      
      </View>
        </View>
        
        
        <Text style={styles.label}>Location</Text>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={toggleUseLocation}>
            {useLocation ? (
              <CheckedIcon height="18" width="18" />
            ) : (
              <UncheckedIcon height="18" width="18" />
            )}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}> Use my current location </Text>
        </View>
        <TextInput
          style={useLocation ? styles.textInputDisabled : styles.textInput}
          value={item.location}
          onChangeText={t => setItem({...item, location: t})}
          onSubmitEditing={sendItem}
          returnKeyType="send"
          enablesReturnKeyAutomatically={true}
          placeholder="street address, city, state"
          editable={!useLocation}
        />


      <Text style={styles.label}>NGO Details</Text>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={toggleNGO}>
            {useNGO ? (
              <CheckedIcon height="18" width="18" />
            ) : (
              <UncheckedIcon height="18" width="18" />
            )}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}> Member of NGO </Text>
        </View>
        <PickerSelect
              disabled={!useNGO}
              style={{inputIOS: styles.selector}}
             
              value={item.NGO}
              onValueChange={t => setItem({...item, NGO: t})}
              items={[
                {label: 'Batman', value: 'Batman'},
                {label: 'spiderman', value: 'spiderman'},
                {label: 'Other', value: 'Other'},
              ]}
            />

  
        {item.location !== '' &&
          item.name.trim() !== '' &&
          item.contact.trim() !== '' && (
            <TouchableOpacity onPress={sendItem}>
              <Text style={styles.button}>Register</Text>
            </TouchableOpacity>
          )}
      </ScrollView>
    );
  };


export default Volunteer;
