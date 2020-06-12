import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  Button,
} from 'react-native';
import {searchVolunteer, update} from '../lib/utils';
import Accept from '../screens/Accept-reject';

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
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 16,
    overflow: 'hidden',
    paddingBottom: 12,
    textAlign: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  button2: {
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
    data: [],
  };
  updateItem(orderItem) {
    console.log('accepted', orderItem);
    const payload = {
      ...orderItem,
      id: orderItem.id || orderItem['_id'],
      is_accepted: 'true',
    };
    console.log('payload for update ', payload);

    update(payload)
      .then(() => {
        // Alert.alert('Done', 'Your order has been updated.', [{text: 'OK'}]);
        // navigation.navigate('order pending');
      })
      .catch(err => {
        console.log(err);
        Alert.alert('ERROR', err.message, [{text: 'OK'}]);
      });
  }

  AcceptButton(props) {
    let data = '';
    console.log('is_accepted', props);
    let acceptPropData = {};
    if (props.is_accepted == 'true') {
      acceptPropData = {
        name: 'You accepted this order',
      };
    } else {
      acceptPropData = {
        name: 'Accept',
      };
    }

    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            console.log('clicked ');
            this.updateItem(props);
          }}>
          <Accept name={acceptPropData} />
        </TouchableOpacity>
      </View>
      // <FlatList
      //   data={data}
      //   renderItem={({item}) => item.title}
      //   keyExtractor={item => item.id}

      // />
    );
  }

  Item(itemsValues) {
    console.log('props', itemsValues);
    return (
      <View style={{borderBottomColor: '#dddddd', borderBottomWidth: 0.25}}>
        <TouchableOpacity style={styles.itemTouchable}>
          <View style={styles.itemView}>
            <Text style={styles.itemName}>{itemsValues.name}</Text>
            <Text style={styles.itemQuantity}>
              {' '}
              ( {itemsValues.quantity} ){' '}
            </Text>
          </View>
          <View style={styles.itemView}>
            <Text style={styles.ngoItem}>Provided By, {itemsValues.NGO}</Text>
          </View>
          <Text style={styles.itemDescription}>{itemsValues.description}</Text>
        </TouchableOpacity>
        <View>{this.AcceptButton(itemsValues)}</View>
      </View>
    );
  }
  renderItem(prop) {
    return <Text>{prop.title.name}</Text>;
  }
  UNSAFE_componentWillMount() {
    searchVolunteer()
      .then(results => {
        // setInfo(`${results.length} result(s)`)
        console.log('DATA FOR VOLUNTEER', results);
        this.setState({data: results});
        //setItems(results);
      })
      .catch(err => {
        console.log(err);
        Alert.alert(
          'ERROR',
          'Please try again. If the problem persists contact an administrator.',
          [{text: 'OK'}],
        );
      });
  }
  render() {
    console.log('rendering');
    return (
      <View style={styles.outerView}>
        <Text style={styles.button}>Accept any order to deliver</Text>
        <FlatList
          style={styles.flatListView}
          data={this.state.data}
          renderItem={({item}) => this.Item(item)}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
export default Volunteer;
