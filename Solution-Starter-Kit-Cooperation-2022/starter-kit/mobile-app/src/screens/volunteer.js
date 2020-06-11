import React, {Component} from 'react';
import {StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,FlatList,
  Alert,Button} from 'react-native';
 
  import { searchVolunteer } from '../lib/utils';


  const styles = StyleSheet.create({
    outerView: {
      backgroundColor: '#FFF',
      width: '100%',
      height: '100%',
    },
    inputsView: {
      backgroundColor: '#F1F0EE',
      padding: 16,
      padding: 22,
    },
    label: {
      fontFamily: 'IBMPlexSans-Medium',
      color: '#000',
      fontSize: 14,
      paddingBottom: 5,
    },
    selector: {
      fontFamily: 'IBMPlexSans-Medium',
      backgroundColor: '#fff',
      padding: 8,
      marginBottom: 10,
    },
    textInput: {
      fontFamily: 'IBMPlexSans-Medium',
      backgroundColor: '#fff',
      padding: 8,
      marginBottom: 10,
    },
    searchResultText: {
      fontFamily: 'IBMPlexSans-Bold',
      padding: 10,
      color: 'black',
    },
    flatListView: {
      backgroundColor: '#FFF',
    },
    itemTouchable: {
      flexDirection: 'column',
      padding: 15,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
    },
    itemView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    itemName: {
      fontSize: 24,
      fontFamily: 'IBMPlexSans-Medium',
    },
    ngoItem: {
      fontSize: 15,
      fontFamily: 'IBMPlexSans-Medium',
    },
    itemQuantity: {
      fontSize: 14,
      fontFamily: 'IBMPlexSans-Medium',
      color: 'gray',
    },
    itemDescription: {
      fontSize: 14,
      fontFamily: 'IBMPlexSans-Medium',
      color: 'gray',
    },
    button: {
      backgroundColor: '#4caf50',
      color: '#FFFFFF',
      fontFamily: 'IBMPlexSans-Medium',
      fontSize: 16,
      overflow: 'hidden',
      padding: 12,
      textAlign: 'center',
      borderRadius: 10,
      marginTop: 35,
    },
  });
  


  
    class Volunteer extends Component {
      state = {
        count: '',
        items: [{_id: "0fc5e5cf-a567-4bbb-815f-7fc062729ed0",
        _rev: "4-5d5e39636bb57540eebc0f7af8b07230",
        type: "Help",
        name: "Money",
        description: "10000",
        quantity: 1,
        location: "37.785834,-122.406417",
        contact: "Riya@gmail.com",
        userID: "CC20DFD3-D0F5-425C-B6D2-AD8022381062",
        NGO: "NGO2",
        orderPlaced: "true"}],
      };
    //const [items, setItems] = React.useState([]);
     Item = (props) => {
       console.log('props',props['name']);
      return (
        
        <TouchableOpacity 
            >
          <View >
            <Text >{props['name']}</Text>
            <Text > { props['quantity']} </Text>
          </View>
          <Text >{props['description']}</Text>
        </TouchableOpacity>
      );
    };
    
    
      
    // UNSAFE_componentWillMount() {
    //   searchVolunteer()
    //     .then((results) => {
    //       // setInfo(`${results.length} result(s)`)
    //       this.setState({
    //         items: results,
    //       });
    //       //setItems(results);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //       Alert.alert('ERROR', 'Please try again. If the problem persists contact an administrator.', [{text: 'OK'}]);
    //     });
    //   }

      render() { 
        return (
      <View style={styles.outerView}>
        
    <FlatList style={styles.flatListView}
        data={this.state.items}
        
        renderItem={({ item }) => {this.Item({...item})}}
        keyExtractor={item => item.id || item['_id']}
      />
   </View>

    )}
  };


export default Volunteer;
